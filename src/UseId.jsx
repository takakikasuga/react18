import { useId, useState } from 'react';

const UseId = () => {
  const [state, setState] = useState(0);
  const id = useId();
  const id2 = useId();
  const id3 = useId();
  // NOTE: マウントしたタイミングで割り当てられ、値は状態変更に限らず不変となる。
  console.log('id ===', id);
  console.log('id2 ===', id2);
  console.log('id3 ===', id3);
  const countUpState = () => {
    setState((pre) => pre + 1);
  };
  return (
    <div className='App'>
      <h1>useId Hooks</h1>
      <button onClick={countUpState}>カウントアップ</button>
      <p>状態：{state}</p>
    </div>
  );
};

export default UseId;
