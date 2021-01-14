import { ButtonHTMLAttributes, ComponentType, PropsWithChildren } from 'react';
import { IconBaseProps } from 'react-icons';
import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ComponentType<IconBaseProps>;
}

export default function Button(props: PropsWithChildren<ButtonProps>) {
  const { icon: Icon, children, ...rest } = props;

  return (
    <S.Container type="button" {...rest}>
      {Icon && <Icon size={20} />}
      {children}
    </S.Container>
  );
}
