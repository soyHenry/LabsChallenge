import React from 'react';
import ProductCard from './ProductCard'

function Catalogo({ products }) {
    return (
        <div className="container border-dark">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {products && products.map((product, index) => {
                    return (
                        <ProductCard key={index} product={product} />
                    )
                })}
            </div>
        </div>
    )
}

export default Catalogo;