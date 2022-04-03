import React, { useState } from 'react';
import ProductList from './ProductList';
import { generateProducts } from './data';
import './index.css';

// NOTE: １万のダミーデータを作成
const dummyProducts = generateProducts();

const filterProducts = (filterWord) => {
  // NOTE: 抽出キーワードがなければ、１万のデータを返す。
  if (!filterWord) {
    return dummyProducts;
  }
  // NOTE: 抽出キーワードでフィルタリングを行う。
  return dummyProducts.filter((product) => product.includes(filterWord));
};

const NormalTransition = () => {
  const [filterWord, setFilterWord] = useState('');
  const startTime = Date.now();
  // NOTE: 特定のワードをキーに、１万のダミーデータから対象データを抽出
  const filteredProducts = filterProducts(filterWord);
  const endTime = Date.now();
  console.log(endTime - startTime);

  const updateFilterHandler = (event) => {
    setFilterWord(event.target.value);
  };

  return (
    <div id='app'>
      <h1>React17系 - setState</h1>
      <input
        type='text'
        placeholder='数字を入力してください'
        onChange={updateFilterHandler}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default NormalTransition;
