import Main from "./main";
import Footer from "./footer";
import Nav from "./nav";

function init() {
    return (
        <div>
            <Nav />
            <Main />
            <Footer />
        </div>
    )
}

ReactDOM.render(<init />,document.querySelector("#root"));