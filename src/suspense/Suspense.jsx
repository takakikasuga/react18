import React, { lazy, Suspense } from 'react';

/**
 * NOTE: Suspenseの例
 * @see https://codesandbox.io/s/suspense-import-bqb5t?file=/src/Other.js:0-165
 */
const delay = (time, result) => {
  console.log('time === ', time);
  console.log('result === ', result);
  return new Promise((resolve) => {
    setTimeout(() => resolve(result), time);
  });
};

const Other = lazy(() =>
  import('./Other').then((result) => delay(500, result))
);

const SuspenseApp = () => (
  <>
    <h1>Hello Suspense</h1>
    <Suspense fallback={<div>Loading...</div>}>
      <Other />
    </Suspense>
  </>
);

export default SuspenseApp;
