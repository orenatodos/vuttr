import { FiPlus, FiSearch } from 'react-icons/fi';

import Button from '../Button';

import * as S from './styles';

export default function Header() {
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
        <Button icon={FiPlus}>Add</Button>
      </div>
    </S.Container>
  );
}
