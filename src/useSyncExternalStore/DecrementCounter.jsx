import { useCallback } from 'react';
import { store } from './UseSyncExternalStore';
import { useStore } from './hooks';

const DecrementCounter = () => {
  const count = useStore(
    store,
    useCallback((state) => state.count, [])
  );
  console.log('count === ', count);
  const decrement = () => {
    store.setState((prev) => ({ ...prev, count: prev.count - 1 }));
  };
  return (
    <div>
      {count} <button onClick={decrement}>-1</button>
    </div>
  );
};

export default DecrementCounter;
