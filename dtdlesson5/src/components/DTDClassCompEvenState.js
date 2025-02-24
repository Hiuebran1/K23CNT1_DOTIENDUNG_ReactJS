import React ,{Component} from "react";
class DTDClassCompEventState extends Component{
    constructor (props){
        super(props);
        this.state  ={
            DTDFULLNAME:'DO TIEN DUNG',
            DTDAGE:19,
        }
    }
    DTDEventHandleClick1 = ()=> {
        alert('FULLNAME:'+this.state.DTDFULLNAME + "\n AGE:"+this.state.DTDAGE);

    }
    render () {
        return(
            <div className="alert alert-danger">
                <button className="btn btn-primary"
                onClick={this.DTDEventHandleClick1

                }>
                    Button 1 - du lieu trong state
                </button>
          
            </div>
        );

        
        
        } 

    

    
}
export default DTDClassCompEventState;