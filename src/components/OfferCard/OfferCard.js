import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './OfferCard.scss';

const OfferCard = props => {
    return (
        <div className="offer-card">
            <p className="title">{props.title}</p>
            <button className="offer-btn">{props.button}</button>
            <p className="fee">{props.fee}</p>
            <ul className="offer-services">
               {props.services.map((el, index) => {
                   return (
                        <li key={index}>
                            <FontAwesomeIcon icon={faCheck}/>
                            {el}
                        </li>
                   )
               })}
            </ul>
        </div>
    );
};

export default OfferCard;