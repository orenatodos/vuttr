import { useCallback, useRef, useState } from 'react';
import { FiX } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useTools } from '../../hooks/useTools';

import getValidationErrors from '../../utils/getValidationErrors';

import Field from './Field';
import Button from '../Button';

import * as S from './styles';

interface FormData {
  title: string;
  link: string;
  description: string;
  tags: string;
}

interface FormProps {
  modalIsShown: boolean;
  setModalIsShown: any;
}

export default function Form(props: FormProps) {
  const { modalIsShown, setModalIsShown } = props;

  const formRef = useRef<FormHandles>(null);

  const [tags, setTags] = useState<string[]>([]);

  const { handleAddTool } = useTools();

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          title: Yup.string().required('Name required'),
          link: Yup.string()
            .required('Link required')
            .url('Enter a valid link'),
          description: Yup.string(),
          tags: Yup.string(),
        });

        await schema.validate(data, { abortEarly: false });

        handleAddTool({ ...data, tags });
        setModalIsShown(!modalIsShown);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [handleAddTool, tags],
  );

  const handleAddFieldTags = useCallback(
    event => {
      const { key } = event;

      if (key === ' ') {
        const tag = formRef.current?.getFieldValue('tags').trim();
        setTags([...tags, tag]);
        formRef.current?.clearField('tags');
      }
    },
    [tags],
  );

  const handleRemoveFieldTags = useCallback(
    (id: number) => {
      const newTags = tags;

      const tagRemoved = newTags.findIndex((tag, index) => index === id);

      newTags.splice(tagRemoved, 1);

      setTags([...newTags]);
    },
    [tags],
  );

  return (
    <S.Container ref={formRef} onSubmit={handleSubmit}>
      <Field
        type="text"
        name="title"
        id="title"
        label="Tool Name"
        placeholder="Required..."
      />
      <Field
        type="url"
        name="link"
        id="link"
        label="Tool Link"
        placeholder="Required..."
      />
      <Field
        type="textarea"
        name="description"
        id="description"
        label="Tool Description"
        placeholder="Optional..."
      />
      <Field
        type="text"
        name="tags"
        id="tags"
        label="Tool Tags"
        placeholder="Optional..."
        onKeyUp={handleAddFieldTags}
      >
        {tags.length > 0 && (
          <>
            {tags.map((tag, index) => (
              // eslint-disable-next-line
              <span key={index}>
                {tag}
                <FiX size={16} onClick={() => handleRemoveFieldTags(index)} />
              </span>
            ))}
          </>
        )}
      </Field>
      <Button type="submit">Add tool</Button>
    </S.Container>
  );
}
