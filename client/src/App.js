import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Catalogo from './components/Catalogo'
import Pagination from './components/Pagination';

function App() {

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(30);

  const getProductsResults = (productsSearch) => {
    setProducts(productsSearch);
  }

  // Get current products
  const indexOfLastProudct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProudct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProudct);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div>
      <Navbar getProductsResults={getProductsResults} />
      <div className="container bg-info shadow-lg">
        <Catalogo products={currentProducts} />
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default App;
