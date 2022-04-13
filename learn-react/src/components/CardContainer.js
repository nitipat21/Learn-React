import Card from "./Card"
import Data from "../data"


export default function CardContainer() {

    const cardElement = Data.map( (item) => {
        return (

            <Card 
                    img={item.coverImg}
                    rating={item.stats.rating}
                    viewCount={item.stats.reviewCount}
                    location={item.location}
                    title={item.title}
                    price={item.price}
                    status={item.openSpots}
            />

        )
    })

    return (
        <div className="cards-container">
           {cardElement}
        </div>
    )
}