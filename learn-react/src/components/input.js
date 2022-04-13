export default function Input() {
    
    return(

        <div className="input-container">
            <div className="text-input-container">
                <div className="text-first-input">
                    <input type="text" name="firstInput" id="firstInput" />
                </div>
                <div className="text-second-input">
                    <input type="text" name="secondInput" id="secondInput" />
                </div>
            </div>
            <div className="sumbit-input-container">
                <button>
                    <h1>Get a new meme image <i class='bx bxs-image'></i></h1>
                </button>
            </div>
        </div>

    )
    
}