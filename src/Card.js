import React from 'react';
import './App.css';
import Logc from "./logc.png";
export default function Card (){
    return(
<>
<div className="card">



<img src={Logc}></img>
<div className="title">Title</div>
<div className="location">Location</div>
<div className="tags">Tags</div>
<button>READ MORE</button>
</div>

</>
    )
}
