import {
  InputHTMLAttributes,
  PropsWithChildren,
  TextareaHTMLAttributes,
  useEffect,
  useRef,
} from 'react';
import { useField } from '@unform/core';

import * as S from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

type FieldProps = (InputProps & TextareaProps) & {
  name: string;
  label: string;
  type: string;
};

export default function Field(props: PropsWithChildren<FieldProps>) {
  const { type, name, id, label, children, ...rest } = props;

  const inputRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null);

  const { fieldName, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const isTypeTextarea = type === 'textarea';

  const textarea = <textarea ref={inputRef} name={name} id={id} {...rest} />;

  const input = (
    <input ref={inputRef} type={type} name={name} id={id} {...rest} />
  );

  return (
    <S.Container>
      <label htmlFor={id}>{label}</label>
      <div>
        {children}
        {isTypeTextarea ? textarea : input}
      </div>
      {error && <p>{error}</p>}
    </S.Container>
  );
}
