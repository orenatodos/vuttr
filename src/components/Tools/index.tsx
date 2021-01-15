import { FiEdit, FiTrash } from 'react-icons/fi';

import Button from '../Button';

import { Tool } from '../../App';

import * as S from './styles';

interface ToolsProps {
  tools: Tool[];
}

export default function Tools(props: ToolsProps) {
  const { tools } = props;

  return (
    <S.Container>
      {tools.map(tool => (
        <article key={tool.id}>
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
            <Button type="button" className="remove">
              <FiTrash size={16} />
            </Button>
          </div>
        </article>
      ))}
    </S.Container>
  );
}
