import { useCallback, useState } from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi';

import Button from '../Button';
import Modal from '../Modal';

import * as S from './styles';

export default function Header() {
  const [isShown, setIsShown] = useState(false);

  const handleModal = useCallback(() => {
    setIsShown(!isShown);
  }, [isShown]);

  return (
    <S.Container>
      <h1>VUTTR</h1>
      <h2>Very Useful Tools to Remember</h2>
      <div>
        <div>
          <S.SearchBar>
            <FiSearch size={20} />
            <input type="search" placeholder="Digite o que está procurando…" />
          </S.SearchBar>
          <S.Checkbox htmlFor="tags">
            <input type="checkbox" name="tags" id="tags" />
            <span>Search in tags only</span>
          </S.Checkbox>
        </div>
        <Button icon={FiPlus} onClick={handleModal}>
          Add
        </Button>
      </div>
      <Modal isShown={isShown} />
    </S.Container>
  );
}
