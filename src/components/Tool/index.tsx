import { useState } from 'react';
import { FiEdit2, FiX } from 'react-icons/fi';

import Modal from '../Modal';
import Confirmation from '../Confirmation';

import { Tool as ToolProp } from '../../hooks/useTools';

import * as S from './styles';

interface ToolProps {
  tool: ToolProp;
}

export default function Tool({ tool }: ToolProps) {
  const [modalIsShown, setModalIsShown] = useState(false);

  return (
    <>
      <S.Container>
        <a href={tool.link}>{tool.title}</a>
        {tool.description && <p>{tool.description}</p>}
        {tool.tags.length > 0 && (
          <ul>
            {tool.tags.map((tag, index) => (
              // eslint-disable-next-line
              <li key={index}>#{tag}</li>
            ))}
          </ul>
        )}
        <div>
          <button type="button" onClick={() => setModalIsShown(!modalIsShown)}>
            <FiX size={16} />
            Remove
          </button>
          <button type="button">
            <FiEdit2 size={16} />
            Edit
          </button>
        </div>
      </S.Container>
      <Modal
        title="Remove tool"
        icon={FiX}
        isShown={modalIsShown}
        hide={() => setModalIsShown(!modalIsShown)}
      >
        <Confirmation
          id={tool.id}
          title={tool.title}
          modalIsShown={modalIsShown}
          setModalIsShown={setModalIsShown}
        />
      </Modal>
    </>
  );
}
