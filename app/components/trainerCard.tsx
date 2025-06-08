import React from 'react';

function TrainerCard({nameTrainer, title, image} :
                   { title: string, nameTrainer: string, image : string}) {
    return (
        <div className="trainer-box-container">
            <img src={image} alt="Боксер" className="image-rates" />
            <ul className="features">
                <li>
                    <span className="checkmark">{nameTrainer}</span>
                </li>
                <li>
                    <span className="checkmark">{title}</span>
                </li>
            </ul>
        </div>
    )
}

export default TrainerCard;