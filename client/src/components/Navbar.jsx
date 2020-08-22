import React, { useState } from 'react';

function Navbar() {

    const [search, setSearch]= useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:4000/api/search?value=${search}`)
            .then(res => res.json())
            .then((resultados) => {
                console.log(resultados)
            })
    }
    
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">SmartStore</a>
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