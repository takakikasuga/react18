import { useCallback } from 'react';
import { store } from './UseSyncExternalStore';
import { useStore } from './hooks';

const TextBox = () => {
  const text = useStore(
    store,
    useCallback((state) => state.text, [])
  );
  console.log('TextBox レンダリング');
  const setText = (event) => {
    store.setState((prev) => ({ ...prev, text: event.target.value }));
  };
  return (
    <div>
      <input value={text} onChange={setText} className='full-width' />
    </div>
  );
};

export default TextBox;
