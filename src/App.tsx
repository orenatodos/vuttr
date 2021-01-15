import { useCallback, useEffect, useState } from 'react';

import api from './services/api';

import Header from './components/Header';
import Tools from './components/Tools';

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
      <Tools tools={tools} />
    </>
  );
}
