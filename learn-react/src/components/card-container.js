import Card from "./card"
import data from "../data"

export default function CardContainer() {

    const cardElement = data.map( item => {
        return (

            <Card
                    title={item.title}
                    location={item.location}
                    googleMapsUrl={item.googleMapsUrl}
                    startDate={item.startDate}
                    endDate={item.endDate}
                    description={item.description}
                    imageUrl={item.imageUrl}
            />

        )
    })

    return (
        <div className="card-container">
            {cardElement}
        </div>
    )
}