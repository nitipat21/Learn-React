export default function Card(props) {
    
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.imageUrl} alt="" />
            </div>
            <div className="card-info">
                <div className="location">
                    <i class='bx bx-map'></i>
                    <h6>{props.location}</h6>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div className="place-name">
                    <h1>{props.title}</h1>
                </div>
                <div className="date-container">
                    <h6>{props.startDate} - {props.endDate}</h6>
                </div>
                <div className="description-container">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}