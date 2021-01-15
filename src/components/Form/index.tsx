import { FiPlus } from 'react-icons/fi';

import Field from './Field';
import Button from '../Button';

import * as S from './styles';

export default function Form() {
  return (
    <S.Container>
      <strong>
        <FiPlus size={20} />
        Add new tool
      </strong>
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
        name="tag"
        id="tag"
        label="Tool Tags"
        placeholder="Optional..."
      />
      <Button type="submit">Add tool</Button>
    </S.Container>
  );
}
