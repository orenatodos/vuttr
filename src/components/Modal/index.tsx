import { PropsWithChildren } from 'react';

import ReactDOM from 'react-dom';

import * as S from './styles';

const modalRoot = document.getElementById('modal-root') as HTMLElement;

interface ModalProps {
  isShown: boolean;
}

export default function Modal(props: PropsWithChildren<ModalProps>) {
  const { isShown, children } = props;

  const modal = (
    <S.Container>
      <div>{children}</div>
    </S.Container>
  );

  return isShown ? ReactDOM.createPortal(modal, modalRoot) : null;
}
