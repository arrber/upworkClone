import React from 'react';
import './TalentCard.scss';

const TalentCard = props => {
    return (
        <div className="talent-card">
            <img src={props.image} className="card-image" alt={props.title}/>
            <div className="talent-card-body">
                <p className="title">{props.title}</p>
            </div>
        </div>
    );
};

export default TalentCard;