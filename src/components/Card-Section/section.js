import "./section.css"
import Osplaslogo from "../../images/osplash.png"
import downarrow from "../../images/downArrow.png";
import { useNavigate } from "react-router-dom"



const Section=()=>{
    const navigate = useNavigate();

    let userdata=JSON.parse(localStorage.getItem("selectedUser"));
    // console.log(data);

    return(
        <div className="Section-container">
        <div className="input-section">
        <input type="text" placeholder="People, emails, groups" onFocus={()=>{navigate("/invite")}} />
        <button>invite</button>
        </div>
        <div className="memberlist-container">
         <div className="default">
            <div className="left">
                <div style={{marginTop:"2px"}}>
                <img src={Osplaslogo} alt="logo" style={{borderRadius:"50%"}} />
                </div>
                <div>
                    <p style={{fontWeight:"600",margin:"0"}}>Everyone at OSlash</p>
                    <p style={{color:"grey",fontSize:"12px",margin:"0"}}>25 workspace members</p>
                </div>
               

            </div>
            <div className="right">
                <span style={{marginRight:"15px",color:"grey", fontSize:"12px"}}>No access</span>
                <img src={downarrow} alt="" />
            </div>
         </div>
         {
            (userdata!==null)? 
            userdata.map((user,i)=>{
                return (
                    <>
                    <div className="default" key={i}>
            <div className="left">
                <div style={{marginTop:"2px",marginRight:"20px"}}>
                <img src={user.profileImg} alt="logo" style={{borderRadius:"50%",height:"100%",width:"100%"}} />
                </div>
                <div>{
                    (user.name!==undefined)? 
                    <p style={{fontWeight:"600",margin:"0"}}>
                    {user.name}
                  
                   </p>:  <p style={{fontWeight:"600",margin:"0"}}>
                    {user.branch}
                  
                   </p>
                    }
                   
                    <p style={{color:"grey",fontSize:"12px",margin:"0"}}>{user.email}</p>
                </div>
               

            </div>
            <div className="right">
                <span style={{marginRight:"15px",color:"grey", fontSize:"12px"}}>{user.access}</span>
                <img src={downarrow} alt="" />
            </div>
         </div>
                    </>
                )
            }) : ""
         }
         {

         }
         
        </div>
       
        </div>
    )
}

export default Section;