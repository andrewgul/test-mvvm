import * as React from 'react';
import { IDisposable } from '../interfaces/IDisposable';

export const useStore = <S extends IDisposable>(store: S): S => {
  const storeRef = React.useRef(store);

  React.useEffect(() => {
    return () => {
      storeRef?.current?.dispose?.();
    };
  }, []);

  return storeRef.current;
};
