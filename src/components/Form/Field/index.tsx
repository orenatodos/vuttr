import { PropsWithChildren } from 'react';
import * as S from './styles';

interface FieldProps {
  type: string;
  name: string;
  id: string;
  label: string;
  placeholder: string;
}

export default function Field(props: PropsWithChildren<FieldProps>) {
  const { type, name, id, label, children, ...rest } = props;

  const isTypeTextarea = type === 'textarea';

  const textarea = <textarea name={name} id={id} {...rest} />;

  const input = <input type={type} name={name} id={id} {...rest} />;

  return (
    <S.Container>
      <label htmlFor={id}>{label}</label>
      <div>
        {children}
        {isTypeTextarea ? textarea : input}
      </div>
    </S.Container>
  );
}
