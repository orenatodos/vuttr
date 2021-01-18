import { useTools } from './hooks/useTools';

import Header from './components/Header';
import Tool from './components/Tool';

export interface Tool {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string[];
}

export default function App() {
  const { tools } = useTools();

  return (
    <>
      <Header />
      <main>
        {tools.map(tool => (
          <Tool key={tool.id} tool={tool} />
        ))}
      </main>
    </>
  );
}
