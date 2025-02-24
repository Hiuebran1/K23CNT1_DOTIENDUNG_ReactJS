  import React from "react"


  export default function DTDFunCompEvent1() {
     const DTDFunEventButton1Click = ()=>{
        alert ('Button 1 - Clicked')
     };
     const DTDFunEventButton2Click = ()=>{
        alert ('Button 2 - Clicked')
     };
    const DTDFunEventButton3Click = (name)=>{
        alert ('Name:' + name)
     };

    return(
        <div className="alert alert-info">
            {/* <button className="btn btn-primary" onClick={ DTDFunEventButton1Click()}> 
                Button1</button> */}
            <button className="btn btn-success mx1" onClick={ DTDFunEventButton2Click}>
                 Button2</button>
            {/* <button className="btn btn-primary" onClick={ DTDFunEventButton3Click("TIEN DUNG")}>
                 Button3</button> */}
            <button className="btn btn-success mx1" onClick={()=> DTDFunEventButton3Click("TIEN DUNG")}>
                 Button4</button>
            
        </div>
    )
  }

