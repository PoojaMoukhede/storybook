import "./inviteCard.css";
import Footer from "../invite-Footer/inviteFooter";
import Header from "../invite-Header/inviteHeader";
import Section from "../Invite-Section/inviteSection";



const Invite=()=>{
    return (
        <>
         <div className="invite-container">
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
        </>
    )
}

export default Invite;