import './App.css';
import UseSyncExternalStore from './useSyncExternalStore/UseSyncExternalStore';
import UseInsertionEffect from './useInsertionEffect/UseInsertionEffect';
import ThemeButton from './useInsertionEffect/ThemeButton';
import UseTransition from './useTransition/UseTransition';
import NormalTransition from './normalTransition/NormalTransition';
import Suspense from './suspense/Suspense';

function App() {
  return (
    <>
      <UseSyncExternalStore />
      <UseInsertionEffect />
      <ThemeButton />
      <Suspense />
      <UseTransition />
      <NormalTransition />
    </>
  );
}

export default App;
