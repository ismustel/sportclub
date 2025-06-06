import React from 'react';

function RatesCard({title,price, image, description_1, description_2, description_3, description_4 } :
                   { title: string, price: number, image: string,
                       description_1 :string, description_2 :string, description_3   :string, description_4 : string }) {
    return (
        <div className="box-container">
            <h2 className="title-rates">{title}</h2>
            <img src={image} alt="Боксер" className="image-rates" />
            <p className="price">{price} ₽</p>
            <ul className="features">
                <li>
                    <span className="checkmark">&#10004;</span> {description_1}
                </li>
                <li>
                    <span className="checkmark">&#10004;</span> {description_2}
                </li>
                <li>
                    <span className="checkmark">&#10004;</span> {description_3}
                </li>
                <li>
                    <span className="checkmark">&#10004;</span> {description_4}
                </li>
            </ul>
        </div>
    )
}

export default RatesCard;