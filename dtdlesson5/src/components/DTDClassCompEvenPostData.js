import React , {Component} from "react";
class DTDClassCompEventPostData extends Component{
     constructor(props){
        super(props);

     }
     dtdEventHandleClick = ()=>{
            this.props.onDtdDataToApp('du lieu tu component con- DTDClassCompEventPostData')
     }
     render(){
        return(
            <div className="alert alert-success">
                <button className="btn btn-primary" 
                onClick={this.dtdEventHandleClick}>
                    Button 01 - chuyen du lieu len app

                </button>
            </div>
        )

     }
}
export default DTDClassCompEventPostData