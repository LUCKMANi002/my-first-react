import showPic from "./assets/pic1.png"
import { useState } from "react"
function Min(){
    const [meme , setMeme] = useState({
        topText:"my first react projec",
        bottomText:"lets try pro",
        image:showPic
    })

    function handleChange(event){
       const {name ,value} = event.currentTarget
       setMeme(prev =>({
        ...prev,
       [name]:value
       }))
      

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

        <button className="meme-button">Get a new meme image</button>

        <div className="meme-image">
           <img className="meme-pc" src={meme.image} alt={showPic} />
           <span className="span1">{meme.topText}</span>
           <span className="span2">{meme.bottomText}</span>
        </div>
         </section>

        </main>
   
    )
}

export default Min