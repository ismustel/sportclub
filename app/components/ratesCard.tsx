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
                    <span className="checkmark"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.801 9.99999C22.2577 12.2413 21.9322 14.5714 20.8789 16.6018C19.8255 18.6322 18.1079 20.24 16.0125 21.1573C13.9171 22.0746 11.5706 22.2458 9.36431 21.6424C7.15798 21.0389 5.2252 19.6974 3.88828 17.8414C2.55137 15.9854 1.89113 13.7272 2.01767 11.4434C2.14421 9.15952 3.04989 6.98808 4.58366 5.29116C6.11743 3.59424 8.18659 2.47442 10.4461 2.11844C12.7056 1.76247 15.0188 2.19185 17 3.33499" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 11L12 14L22 4" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> {description_1}
                </li>
                <li>
                    <span className="checkmark"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.801 9.99999C22.2577 12.2413 21.9322 14.5714 20.8789 16.6018C19.8255 18.6322 18.1079 20.24 16.0125 21.1573C13.9171 22.0746 11.5706 22.2458 9.36431 21.6424C7.15798 21.0389 5.2252 19.6974 3.88828 17.8414C2.55137 15.9854 1.89113 13.7272 2.01767 11.4434C2.14421 9.15952 3.04989 6.98808 4.58366 5.29116C6.11743 3.59424 8.18659 2.47442 10.4461 2.11844C12.7056 1.76247 15.0188 2.19185 17 3.33499" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 11L12 14L22 4" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> {description_2}
                </li>
                <li>
                    <span className="checkmark"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.801 9.99999C22.2577 12.2413 21.9322 14.5714 20.8789 16.6018C19.8255 18.6322 18.1079 20.24 16.0125 21.1573C13.9171 22.0746 11.5706 22.2458 9.36431 21.6424C7.15798 21.0389 5.2252 19.6974 3.88828 17.8414C2.55137 15.9854 1.89113 13.7272 2.01767 11.4434C2.14421 9.15952 3.04989 6.98808 4.58366 5.29116C6.11743 3.59424 8.18659 2.47442 10.4461 2.11844C12.7056 1.76247 15.0188 2.19185 17 3.33499" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 11L12 14L22 4" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> {description_3}
                </li>
                <li>
                    <span className="checkmark"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.801 9.99999C22.2577 12.2413 21.9322 14.5714 20.8789 16.6018C19.8255 18.6322 18.1079 20.24 16.0125 21.1573C13.9171 22.0746 11.5706 22.2458 9.36431 21.6424C7.15798 21.0389 5.2252 19.6974 3.88828 17.8414C2.55137 15.9854 1.89113 13.7272 2.01767 11.4434C2.14421 9.15952 3.04989 6.98808 4.58366 5.29116C6.11743 3.59424 8.18659 2.47442 10.4461 2.11844C12.7056 1.76247 15.0188 2.19185 17 3.33499" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 11L12 14L22 4" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> {description_4}
                </li>
            </ul>
        </div>
    )
}

    export default RatesCard;