import React from 'react';

const styleCard = {
    maxWidth: "570px", 
    maxHeigth: "450px",
    minHeigth: "400px"
}

function ProductCard(props) {

    const { thumbnail, title, price, currency_id, available_quantity, condition } = props.product;

    return (
        <div className="col mb-4 mt-4">
            <div className="card mb-3 text-white bg-dark shadow-lg border-0" style={styleCard}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img className="card-img" src={thumbnail} alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{currency_id + " " + price} </p>
                            <p className="card-text">Estado: {condition}</p>
                            <p className="card-text">Stock: {available_quantity}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;