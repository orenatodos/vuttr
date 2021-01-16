import { useState } from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';

import Button from '../Button';
import Modal from '../Modal';
import Confirmation from '../Confirmation';

import { Tool as ToolItem } from '../../App';

import * as S from './styles';

interface ToolProps {
  tool: ToolItem;
  tools: ToolItem[];
  setTools: any;
}

export default function Tool(props: ToolProps) {
  const { tool, tools, setTools } = props;

  const [modalIsShown, setModalIsShown] = useState(false);

  return (
    <>
      <S.Container>
        <a href={tool.link}>{tool.title}</a>
        <p>{tool.description}</p>
        <ul>
          {tool.tags.map((tag, index) => (
            // eslint-disable-next-line
            <li key={index}>#{tag}</li>
          ))}
        </ul>
        <div>
          <Button type="button">
            <FiEdit size={16} />
          </Button>
          <Button
            type="button"
            className="remove"
            onClick={() => setModalIsShown(!modalIsShown)}
          >
            <FiTrash size={16} />
          </Button>
        </div>
      </S.Container>
      <Modal isShown={modalIsShown} hide={() => setModalIsShown(!modalIsShown)}>
        <Confirmation
          id={tool.id}
          title={tool.title}
          tools={tools}
          setTools={setTools}
          modalIsShown={modalIsShown}
          setModalIsShown={setModalIsShown}
        />
      </Modal>
    </>
  );
}
