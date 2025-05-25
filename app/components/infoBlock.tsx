import React from 'react';

function InfoBlock({title, description } :{ title: string, description: string } ){
    return (
        <div className="info-block">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default InfoBlock;