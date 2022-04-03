import React, {
  useInsertionEffect,
  useEffect,
  useLayoutEffect,
  useState
} from 'react';

/**
 * NOTE: サンドボックスサンプル
 * @see https://codesandbox.io/s/9o9h9?file=/src/ThemeButton.js
 */

const UseInsertionEffect = () => {
  const [insertionState, setInsertionState] = useState(0);
  const [layoutState, setLayoutState] = useState(0);
  const [state, setState] = useState(0);
  console.log('Top / 初期レンダリング');
  useInsertionEffect(() => {
    console.log('useInsertionEffect');
    setInsertionState(10);
  }, []);
  useLayoutEffect(() => {
    console.log('useLayoutEffect');
    setLayoutState(20);
  }, []);
  useEffect(() => {
    console.log('useEffect');
    setState(30);
  }, []);

  console.log('Last / 初期レンダリング');
  return (
    <>
      <h1>UseInsertionEffect</h1>;
      {console.log('In Component / 初期レンダリング')}
      <p>useInsertionEffect: {insertionState}</p>
      <p>useLayoutEffect: {layoutState}</p>
      <p>useEffect: {state}</p>
    </>
  );
};

export default UseInsertionEffect;
