import React from 'react';
import IncrementCounter from './IncrementCounter';
import DecrementCounter from './DecrementCounter';
import TextBox from './TextBox';

// library code
const createStore = (initialState) => {
  // NOTE: 状態管理する初期値
  let state = initialState;
  // NOTE: 状態管理するstateを取得するget関数
  const getState = () => state;
  // NOTE: useStateの値を更新して再レンダリングするための更新関数
  const listeners = new Set();
  // NOTE: レンダリングとは関係のないstoreのstateを更新する関数
  // NOTE: レンダリングとは関係あるuseStateの値を更新して再レンダリングするための更新関数
  const setState = (callBack) => {
    console.log('setState / prev / state === ', state);
    state = callBack(state);
    console.log('setState / after / state === ', state);
    console.log('listeners === ', listeners);
    listeners.forEach((listener) => listener());
  };
  // NOTE: storeに登録されている更新関数を登録するための関数
  // NOTE: アンマウント時には更新関数を解除する。
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  return { getState, setState, subscribe };
};

export const store = createStore({ count: 0, text: 'hello' });

const UseSyncExternalStore = () => {
  return (
    <div className='container'>
      <IncrementCounter />
      <DecrementCounter />
      <TextBox />
    </div>
  );
};

export default UseSyncExternalStore;
