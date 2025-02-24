import React, { Component} from "react";

class DTDClassCompEventProps extends Component{
    dtdEventHandleClick1 = ()=>{
        alert('hello...' + this.props.dtdRenderTitle);
    }
    render(){
        return (
            <div className="alert alert-danger">
                <button className="btn btn-primary" onClick={this.dtdEventHandleClick1}>Button 1</button>
            </div>
        );
    }
} 
export default DTDClassCompEventProps;
