import { FiEdit, FiTrash } from 'react-icons/fi';
import * as S from './styles';

export default function Tools() {
  return (
    <S.Container>
      <article>
        <a href="/">Notion</a>
        <p>
          All in one tool to organize teams and ideas. Write, plan, collaborate,
          and get organized.
        </p>
        <ul>
          <li>organization</li>
          <li>planning</li>
          <li>collaboration</li>
          <li>writing</li>
          <li>calendar</li>
        </ul>
        <div>
          <button type="button" className="edit">
            <FiEdit size={16} />
          </button>
          <button type="button" className="remove">
            <FiTrash size={16} />
          </button>
        </div>
      </article>
      <article>
        <a href="/">Notion</a>
        <p>
          All in one tool to organize teams and ideas. Write, plan, collaborate,
          and get organized.
        </p>
        <ul>
          <li>organization</li>
          <li>planning</li>
          <li>collaboration</li>
          <li>writing</li>
          <li>calendar</li>
        </ul>
        <div>
          <button type="button" className="edit">
            <FiEdit size={16} />
          </button>
          <button type="button" className="remove">
            <FiTrash size={16} />
          </button>
        </div>
      </article>
      <article>
        <a href="/">Notion</a>
        <p>
          All in one tool to organize teams and ideas. Write, plan, collaborate,
          and get organized.
        </p>
        <ul>
          <li>organization</li>
          <li>planning</li>
          <li>collaboration</li>
          <li>writing</li>
          <li>calendar</li>
        </ul>
        <div>
          <button type="button" className="edit">
            <FiEdit size={16} />
          </button>
          <button type="button" className="remove">
            <FiTrash size={16} />
          </button>
        </div>
      </article>
    </S.Container>
  );
}
