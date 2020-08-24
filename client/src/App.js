import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Catalogo from './components/Catalogo'

function App() {

  const [products, setProducts] = useState([])

  const getProductsResults = (productsSearch) => {
    setProducts(productsSearch)
  }
  
  return (
    <div>
      <Navbar getProductsResults={getProductsResults}/>
      <Catalogo products={products}/>
    </div>
  );
}

export default App;
