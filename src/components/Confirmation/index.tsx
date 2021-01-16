import { useCallback } from 'react';
import { FiX } from 'react-icons/fi';
import { Tool } from '../../App';

import api from '../../services/api';

import Button from '../Button';

import * as S from './styles';

interface ConfirmationProps {
  id: number;
  title: string;
  tools: Tool[];
  setTools: any;
  modalIsShown: boolean;
  setModalIsShown: any;
}

export default function Confirmation(props: ConfirmationProps) {
  const { id, title, tools, setTools, modalIsShown, setModalIsShown } = props;

  const handleRemove = useCallback(async () => {
    const newTools = tools;

    const toolRemoved = tools.findIndex(tool => tool.id === id);

    newTools.splice(toolRemoved, 1);

    setTools([...newTools]);

    await api.delete(`tools/${id}`);

    setModalIsShown(!modalIsShown);
  }, [id, tools, setTools, modalIsShown, setModalIsShown]);

  return (
    <S.Container>
      <strong>
        <FiX size={20} />
        Remove tool
      </strong>
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
