import { useState } from "react";
import { createContext } from "react";
import person1 from "../../images/boy1.png"
import person2 from "../../images/girl.png"
import person3 from "../../images/boy2.png"
import Engineering from "../../images/Engineering.png";
import Product from "../../images/product.png"

export const context=createContext();
export const ContextProvider=(props)=>{
    var members=[
        {
            name:"Wade Copper",
            email:"copper@gmail.com",
            profileImg:person1,
            access:"No access"

        },
        {
            name:"Arlene Mccoy",
            email:"arlen@gmail.com",
            profileImg:person2,
            access:"No access"
           
        },
       
        {
            name:"Tony Stark",
            email:"tony@gmail.com",
            profileImg:person3,
            access:"No access"

        }
    ]
    var groups=[
        {   
            profileImg:Product,
            branch:"Product",
            access:"No access"
        },
        {   
            profileImg:Engineering,
            branch:"Engineering",
            access:"No access"
        }
        
    ];
const [memberslist,setMemberlist]=useState(members);
const [grouplist,setGrouplist]=useState(groups);
const [selectedUser,setSelectedUser]=useState([]);
const [isselect,setIsselect]=useState(false);


    return(
        <context.Provider value={
            {memberslist,
            setMemberlist,
            selectedUser,
            setSelectedUser,
            grouplist,
            setGrouplist,
            isselect,setIsselect
            }}>
            {props.children}
        </context.Provider>
    )
} ;
