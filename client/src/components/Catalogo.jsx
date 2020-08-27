import React from 'react';
import ProductCard from './ProductCard'

function Catalogo({ products }) {
    return (
        <div className="container mt-3 pt-1">
            <div className="container d-flex justify-content-between">
                <div>
                    <h3>Catalogo</h3>
                </div>
                <div className="">
                    <span>Ordenar por:</span>
                    <span>Precio</span>
                    <button>↑</button>
                    <button>↓</button>
                    <span>Estado</span>
                </div>
            </div>

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