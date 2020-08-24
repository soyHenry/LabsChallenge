import React, { useState } from 'react';

function Navbar({getProductsResults}) {

    const [search, setSearch]= useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:4000/api/search?search=${search}`)
            .then(res => res.json())
            .then((resultados) => {
                getProductsResults(resultados)
            })
    }
    
    return (
        <nav className="navbar navbar-dark bg-dark">
            <span className="navbar-brand">APIStore</span>
            <form className="form-inline" onSubmit={handleSubmit}>
                <input
                    className="form-control mr-sm-2"
                    type="search" placeholder="Buscar" aria-label="Buscar"
                    onChange={handleChange}
                />
                <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Buscar</button>
            </form>
        </nav>
    )
}

export default Navbar;