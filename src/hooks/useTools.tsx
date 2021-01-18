import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import api from '../services/api';

interface FormData {
  title: string;
  link: string;
  description: string;
  tags: string[];
}

export interface Tool {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string[];
}

interface ToolsContextData {
  tools: Tool[];
  setTools: any;
  handleRemoveTool(id: number): void;
  handleAddTool(data: FormData): void;
}

const ToolsContext = createContext({} as ToolsContextData);

export function ToolsProvider({ children }: PropsWithChildren<unknown>) {
  const [tools, setTools] = useState<Tool[]>([]);

  const getData = useCallback(async () => {
    const response = await api.get('/tools');

    setTools(response.data);
  }, []);

  useEffect(() => {
    getData();
  }, []); // eslint-disable-line

  const handleAddTool = useCallback(
    async (data: FormData) => {
      const joinTags = data.tags.join(' ');
      const splitTags = joinTags.split(' ');

      const newTool = { ...data, tags: joinTags ? splitTags : [] };

      const response = await api.post('tools', newTool);

      setTools([...tools, response.data]);
    },
    [tools],
  );

  const handleRemoveTool = useCallback(
    async id => {
      await api.delete(`tools/${id}`);

      const toolRemoved = tools.findIndex(tool => tool.id === id);

      const newTools = tools;
      newTools.splice(toolRemoved, 1);

      setTools([...newTools]);
    },
    [tools],
  );

  return (
    <ToolsContext.Provider
      value={{ tools, setTools, handleAddTool, handleRemoveTool }}
    >
      {children}
    </ToolsContext.Provider>
  );
}

export function useTools() {
  const context = useContext(ToolsContext);

  if (!context) {
    throw new Error('useTool must be within a ToolProvider.');
  }

  return context;
}
