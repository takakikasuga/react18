import { useCallback } from 'react';
import { store } from './UseSyncExternalStore';
import { useStore } from './hooks';

const IncrementCounter = () => {
  const count = useStore(
    store,
    useCallback((state) => state.count, [])
  );
  console.log('count === ', count);
  const increment = () => {
    store.setState((prev) => ({ ...prev, count: prev.count + 1 }));
  };
  return (
    <div>
      {count} <button onClick={increment}>+1</button>
    </div>
  );
};

export default IncrementCounter;
