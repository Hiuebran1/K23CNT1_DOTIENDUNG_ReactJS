import React,{Component} from "react";

export default function DTDFunCompEventProps(DTDprops){
    const dtdHanldeButtonClick1 =()=>{
        alert("dữ liệu từ props:"+DTDprops.dtdRenderName);
        console.log("xin chao",DTDprops.dtdRenderName);
      
    
    }
    const dtdHanldeButtonClick2 =(param)=>{
        alert("dữ liệu từ props (Button 2 click ):"+DTDprops.dtdRenderName);
        console.log("========================");
        console.log("Hi:",param);
        console.log("========================");
    }
    return(
        <div className="alert alert-info">
            <button className="btn btn-primary mx-1" onClick={dtdHanldeButtonClick1}>Button 1</button>
            
            <button className="btn btn-primary mx-1" onClick={()=>dtdHanldeButtonClick2("Button 2")}>Button 2</button>
         
        </div>
    )
}
     