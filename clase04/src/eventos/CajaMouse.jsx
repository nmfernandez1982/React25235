import { useState } from "react";

export default function CajaMouse(){


const [color,setColor]=useState("lightGray");

return(
<div
    style={{
        margin:"20px",
        width:"200px",
        height:"100px",
        backgroundColor:color,
        textAlign:"center",
        borderRadius:"4px",
        cursor:"pointer"
    }}
    onMouseOver={()=>setColor("lightblue")}
    onMouseOut={()=>setColor("lightGray")}
>
Mouse Por Aqui!!!!!
</div>


)

}