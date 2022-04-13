import GridImage from "../images/grid-image.png"

export default function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-image-container">
                <img src={GridImage} alt=""/>
            </div>
            <div className="hero-text-container">
                <h1>Online Experiences</h1>
                <p>Join Unique interactive activies led by one-of-a-kind hosts-all without leaving home</p>
            </div>
        </div>
    )
}