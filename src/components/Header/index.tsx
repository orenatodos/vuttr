import { useState } from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi';

import Button from '../Button';
import Modal from '../Modal';
import Form from '../Form';

import { Tool } from '../../App';

import * as S from './styles';

interface HeaderProps {
  tools: Tool[];
  setTools: any;
}

export default function Header(props: HeaderProps) {
  const { tools, setTools } = props;

  const [modalIsShown, setModalIsShown] = useState(false);

  return (
    <S.Container>
      <h1>VUTTR</h1>
      <h2>Very Useful Tools to Remember</h2>
      <div>
        <div>
          <S.SearchBar>
            <FiSearch size={20} />
            <input type="search" placeholder="Search" />
          </S.SearchBar>
          <S.Checkbox htmlFor="tags">
            <input type="checkbox" name="tags" id="tags" />
            <span>Search in tags only</span>
          </S.Checkbox>
        </div>
        <Button icon={FiPlus} onClick={() => setModalIsShown(!modalIsShown)}>
          Add
        </Button>
      </div>
      <Modal
        title="Add new tool"
        icon={FiPlus}
        isShown={modalIsShown}
        hide={() => setModalIsShown(!modalIsShown)}
      >
        <Form tools={tools} setTools={setTools} />
      </Modal>
    </S.Container>
  );
}
