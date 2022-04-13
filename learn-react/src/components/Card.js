import React from 'react';
import StarImage from '../images/card/star.png'

export default function Card(props) {

    let badgeText;
    if (props.status === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    

    return (

        <div className="card">
            {badgeText && <div className="card-status"><h6>{badgeText}</h6></div>}
            <div className="card">
                <img src={props.img} alt="card" />
            </div>
            <div className="card-info-container">
                <div className="card-info-rating">
                    <img src={StarImage} alt="star" />
                    <div className="rating"><h6>{props.rating}</h6></div>
                    <div className="viewCount"><h6>({props.viewCount})</h6></div>
                    <div className="location"><h6>•{props.location}</h6></div>
                </div>
                <div className="card-info-text">
                    <h6>{props.title}</h6>
                </div>
                <div className="card-info-price">
                    <h6><span>From ${props.price}</span> / person</h6>
                </div>
            </div>
        </div>

    )

}