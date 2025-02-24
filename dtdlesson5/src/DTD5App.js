import React, {Component} from "react";
import DTDFunCompEvent1 from "./components/DTDFunCompEvent1";
import DTDClassCompEvent1 from "./components/DTDClassCompEvent1";

import DTDFunCompEventProps from "./components/DTDFunCompEventProps";
import DTDClassCompEventProps from "./components/DTDClassCompEventProps";

import DTDClassCompEventPostData from "./components/DTDClassCompEvenPostData";
import DTDClassCompEventState from "./components/DTDClassCompEvenState";

class DTD5App extends Component{
  constructor(props){
      super(props);
      this.state={
        dtdNoiDung:
        "Chua Co Gi"
      }
    }
  
  dtdHandleDataToApp=(content)=>{
    alert(content);
    this.setState()
  }
  render(){
    return(
      <div className="container border mt-3">
        <h1 className="TEXT-center alert alert-info my-2">  K23CNT1 - DO TIEN DUNG - EVENT AND FORM</h1>
        <hr/>
        <div>
          <h2>function Component - Event</h2>
        
        <DTDFunCompEvent1/>
        </div>
        <hr/>
        <div>
          <h2>
            Class Component - Event
          </h2> 
          <DTDClassCompEvent1/>
        </div>
        <hr/>
        <div>
          <h2>
          function Component - Event; props 
          </h2> 
          <DTDFunCompEventProps dtdRenderName='DO TIEN DUNG'/>

        </div> 
        <hr/>
        <div>
          <h2>
          Class Component - Event; props 
          </h2> 
          <DTDClassCompEventProps dtdRenderTitle ="Welcome to TIEN DUNG" />

        </div> 
        <hr/>
        <div>
          <h2>
          Class Component - Event; state
          </h2> 
          <DTDClassCompEventState/>

        </div> 
        <hr/>
        <div>
          <h1>{this.state.dtdNoiDung}</h1>
          <h2>
          Class Component - Event; Post Data to App
          </h2> 
          <DTDClassCompEventPostData onDtdDataToApp={this.dtdHandleDataToApp}  />

        </div> 
      </div>
    );
  }
}
export default DTD5App;
