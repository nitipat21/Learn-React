import React from 'react';
import CardImage from '../images/card/card.png'
import SoldoutImage from '../images/card/soldout.png'
import StarImage from '../images/card/star.png'

export default function Card() {
    return (

        <div className="card">
            <div className="card-status">
                <img src={SoldoutImage} alt="Soldout-image"/>
            </div>
            <div className="card-image">
                <img src={CardImage} alt="card-image" />
            </div>
            <div className="card-info-container">
                <div className="card-info-rating">
                    <img src={StarImage} alt="star-image" />
                    <h6>5.0 <span>(6)•USA</span></h6>
                </div>
                <div className="card-info-text">
                    <h6>Life Lessons with Katie Zaferes</h6>
                </div>
                <div className="card-info-price">
                    <h6><span>From $136</span> / person</h6>
                </div>
            </div>
        </div>

    )

}