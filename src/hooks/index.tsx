import { PropsWithChildren } from 'react';
import { ToolsProvider } from './useTools';

export default function AppProvider({ children }: PropsWithChildren<unknown>) {
  return <ToolsProvider>{children}</ToolsProvider>;
}
