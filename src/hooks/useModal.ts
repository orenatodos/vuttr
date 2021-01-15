import { useCallback, useState } from 'react';

export default function useModal() {
  const [isShown, setIsShown] = useState(false);

  const toogle = useCallback(() => {
    setIsShown(!isShown);
  }, [isShown]);

  return {
    isShown,
    toogle,
  };
}
