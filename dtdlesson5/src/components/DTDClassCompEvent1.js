import React,{Component} from "react";

class DTDClassCompEvent1 extends Component{
    dtdEventHandleClick1 =()=>{
        alert('Button 1 clicked');
    
    }
       
    dtdEventHandleClick2 =(name)=>{
        alert('Button 2 clicked; name= '+name);
    
    }
      
    render(){
        return(
            <div className="alert alert-danger">
                <button className="btn btn-primary mx-1" onClick={this.dtdEventHandleClick1} > Button1</button>
                <button className="btn btn-success mx-1" onClick={()=>this.dtdEventHandleClick2('TIEN DUNG')} > Button2</button>
            </div>
        );
    }
}
export default DTDClassCompEvent1;
     