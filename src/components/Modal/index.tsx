import { ComponentType, PropsWithChildren, useCallback } from 'react';
import { IconBaseProps } from 'react-icons';

import ReactDOM from 'react-dom';

import * as S from './styles';

const modalRoot = document.getElementById('modal-root') as HTMLElement;

interface ModalProps {
  isShown: boolean;
  hide(): void;
  title: string;
  icon?: ComponentType<IconBaseProps>;
}

export default function FormModal(props: PropsWithChildren<ModalProps>) {
  const { isShown, hide, title, icon: Icon, children } = props;

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
      <div>
        <strong>
          {Icon && <Icon size={20} />}
          {title}
        </strong>
        {children}
      </div>
    </S.Container>
  );

  return isShown ? ReactDOM.createPortal(modal, modalRoot) : null;
}
