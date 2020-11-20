import React from 'react';
import './App.css';
import Headerimg from "./header.jpg";


export default function Header (){
    return(
<>
<div className="header">
    <img src={Headerimg}></img>
   <div className="header-top">
       <div className="header-top-left"><h1></h1></div>
       <div className="header-top-right">
    
       </div>
    
   </div>
   <div className="header-bot"></div>
</div>

</>
    )
}

