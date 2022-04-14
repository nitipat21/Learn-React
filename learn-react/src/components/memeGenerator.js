import React from 'react';


export default function Input() {

    const   [allMemes, setAllMemes] = React.useState([])

        ,   [result,setResult] = React.useState(
            
                {   "firstInput":"",
                    "secondInput":"",
                    "memeUrl":"https://i.imgflip.com/30b1gx.jpg"
                }

        ),  getRandomInt = function(max){

            return Math.floor(Math.random() * max);

        },  generateMeme = function(){
        
            const   memeArray = allMemes,
                    dataLength = memeArray.length,
                    randomID = getRandomInt(dataLength),
                    newMemeUrl = memeArray[randomID].url;

            return setResult(prevResult => {
                return  {
                            ...prevResult, memeUrl : newMemeUrl
                        }
            });

        },  handleChange = function(event){
            const {name,value} = event.target;

            return setResult(prevResult => {
                return  {
                            ...prevResult, [name] : value
                        }
            });
        };

        React.useEffect(() => {
            fetch("https://api.imgflip.com/get_memes")
                .then(response => response.json())
                .then(data => setAllMemes(data.data.memes))
            },[])

        console.log(allMemes)
    
    return(

        <div className="memeGenerator-container">
            <div className="input-container">
                <div className="text-input-container">
                    <div className="text-first-input">
                        <input type="text" name="firstInput" id="firstInput" placeholder="Top Text" onChange={handleChange} value={result.firstInput}/>
                    </div>
                    <div className="text-second-input">
                        <input type="text" name="secondInput" id="secondInput" placeholder="Bottom Text" onChange={handleChange} value={result.secondInput}/>
                    </div>
                </div>
                <div className="sumbit-input-container">
                    <button onClick={generateMeme}>
                        <h1>Get a new meme image <i class='bx bxs-image'></i></h1>
                    </button>
                </div>
            </div>
            <div className="output-container">
                <div className="output-image-container">
                    <img src={result.memeUrl} alt="output" className='output-image'/>
                    <h1 className="top-text">{result.firstInput}</h1>
                    <h1 className="bottom-text">{result.secondInput}</h1>
                </div>
            </div>
        </div>
    )
    
}