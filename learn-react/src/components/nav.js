import Logo from '../images/Troll Face.png'

export default function Nav(){
    return (
        <nav>
            <div className="nav-left">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="title">
                    <h1>Meme Generator</h1>
                </div>
            </div>
            <div className="nav-right">
                <div className="nav-text">
                    <h3>React Course - Project 3</h3>
                </div>
            </div>
        </nav>
    )
};

