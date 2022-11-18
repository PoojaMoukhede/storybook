import "./footer.css";
import question from "../../images/question.png"
import link from "../../images/link.png"

const Footer=()=>{
   return (
    <div className="footer-container">
      <div className="left">
        <img src={question} alt="?" style={{marginRight:"10px"}}/>
        <span style={{color:"grey"}}>learn about sharing</span>
      </div>
      <div className="right">
         <img src={link} alt="linkIcon" style={{marginRight:"10px",fontWeight:"600"}} />
         <span style={{fontWeight:"600"}}>Copy link</span>
      </div>
    </div>
   )
}

export default Footer;