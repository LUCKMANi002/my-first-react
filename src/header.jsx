import logo from "./assets/pic3.png"
function Header(){

 return(

    <nav  className="logo">
         <img className="logo-image" src={logo} alt={logo} />
         <h1 className="ememe">meme generater</h1>
    </nav>
    

 ) 

}

export default Header