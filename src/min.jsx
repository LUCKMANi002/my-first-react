
import React, { useState } from "react"
function Min(){
    const [meme , setMeme] = useState({
        topText:"my first react projec",
        bottomText:"lets try pro",
    })

    const [catImage , setCatImage] = useState(null)

    function handleChange(event){
       const {name ,value} = event.currentTarget
       setMeme(prev =>({
        ...prev,
       [name]:value
       }))
      
    }

   async function memeButton(){
          await  fetch("https://api.thecatapi.com/v1/images/search")
            .then(res => res.json())
            .then(data => setCatImage(data[0].url))
  
    }

    
   
 

    
    return(
        <main >
    <div className="main">
        <label
            htmlFor="top">Top text:
            <input
                type="text"
                name="topText"
                id="top"
                placeholder="top text"
                onChange={handleChange}
                value={meme.topText}

             />
        </label>

        <label
            htmlFor="top">Bottom :
            <input
                 type="text" 
                 name="bottomText"
                 id="bottom"
                 placeholder="bottom text"
                 onChange={handleChange}
                    value={meme.bottomText}
                 
            />
        </label>
    </div>

    <section>

        <button className="meme-button" onClick={memeButton}>Get a new meme image</button>

        <div className="meme-image">
           <img className="meme-pc" src={catImage} alt={catImage} />
           <span className="span1">{meme.topText}</span>
           <span className="span2">{meme.bottomText}</span>
        </div>
         </section>

        </main>
   
    )
}

export default Min