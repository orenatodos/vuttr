import { PropsWithChildren, useCallback } from 'react';
import ReactDOM from 'react-dom';
import * as S from './styles';

const modalRoot = document.getElementById('modal-root') as HTMLElement;

interface ModalProps {
  isShown: boolean;
  hide(): void;
}

export default function FormModal(props: PropsWithChildren<ModalProps>) {
  const { isShown, hide, children } = props;

  const handleClosedModal = useCallback(
    event => {
      if (event.target.id === 'modal') {
        hide();
      }
    },
    [hide],
  );

  const modal = (
    <S.Container id="modal" onClick={handleClosedModal}>
      <div>{children}</div>
    </S.Container>
  );

  return isShown ? ReactDOM.createPortal(modal, modalRoot) : null;
}
