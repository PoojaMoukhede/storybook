import Footer from "../card-Footer/Footer";
import Header from "../Card-Header/Header";
import Section from "../Card-Section/section";
import "./card.css"


const Card=()=>{
    return (
        <div className="Container">
         <div className="header">
            <Header/>
         </div>
         <div style={{padding:"15px"}}>
         <Section/>
         </div>
         <div className="footer">
            <Footer/>
         </div>
        
        </div>
    )
}


export default Card;