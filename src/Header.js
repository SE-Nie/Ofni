import React from 'react';
import './App.css';

export default function Header (){
    return(
<>
<div className="header">
   <div className="header-top">
       <div className="header-top-left">LOGO</div>
       <div className="header-top-right">
           <ul>
               <li>Home</li>
               <li>About us</li>
               <li>Contact</li>
           </ul>
       </div>
    
   </div>
   <div className="header-bot">INFO FOR OFNI</div>
</div>

</>
    )
}

