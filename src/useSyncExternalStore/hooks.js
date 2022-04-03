import { useCallback, useSyncExternalStore, useState, useEffect } from 'react';

export const useStore = (store, selector) => {
  return useSyncExternalStore(
    store.subscribe,
    useCallback(
      () => selector(store.getState(), [store, selector]),
      [selector, store]
    )
  );
};

// NOTE: 上記のuseStoreと同じコードを意味する。
// export const useStore = (store, selector) => {
//   const [state, setState] = useState(() => selector(store.getState()));
//   console.log('default state === ', state);
//   useEffect(() => {
//     const callback = () => setState(selector(store.getState()));
//     console.log('useEffect callback === ', callback);
//     const unsubscribe = store.subscribe(callback);
//     // callback();
//     return unsubscribe;
//   }, [store, selector]);
//   return state;
// };
