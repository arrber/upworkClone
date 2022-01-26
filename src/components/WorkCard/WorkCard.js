import React from 'react';
import './WorkCard.scss';

const WorkCard = props => {
    return (
        <div className="work-card">
            <img src={props.image} className="card-image" alt={props.title}/>
            <p className="title">{props.title}</p>
            <p className="description">{props.description}</p>
        </div>
    );
};

export default WorkCard;