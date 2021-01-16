import { useCallback, useEffect, useState } from 'react';

import api from './services/api';

import Header from './components/Header';
import Tool from './components/Tool';

export interface Tool {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: String[];
}

export default function App() {
  const [tools, setTools] = useState<Tool[]>([]);

  const getData = useCallback(async () => {
    const response = await api.get('tools');

    setTools(response.data);
  }, []);

  useEffect(() => {
    getData();
  }, []); // eslint-disable-line

  return (
    <>
      <Header />
      <main>
        {tools.map(tool => (
          <Tool key={tool.id} tool={tool} tools={tools} setTools={setTools} />
        ))}
      </main>
    </>
  );
}
