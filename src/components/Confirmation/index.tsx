import { useCallback } from 'react';
import { useTools } from '../../hooks/useTools';

import Button from '../Button';

import * as S from './styles';

interface ConfirmationProps {
  id: number;
  title: string;
  modalIsShown: boolean;
  setModalIsShown: any;
}

export default function Confirmation(props: ConfirmationProps) {
  const { id, title, modalIsShown, setModalIsShown } = props;

  const { handleRemoveTool } = useTools();

  const handleRemove = useCallback(() => {
    handleRemoveTool(id);

    setModalIsShown(!modalIsShown);
  }, [id, handleRemoveTool, modalIsShown, setModalIsShown]);

  return (
    <S.Container>
      <p>
        Are you sure you want to remove <b>{title}</b>?
      </p>
      <div>
        <Button onClick={() => setModalIsShown(!modalIsShown)}>Cancel</Button>
        <Button onClick={handleRemove}>Yes, remove</Button>
      </div>
    </S.Container>
  );
}
