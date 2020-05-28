import React from 'react';
import ReactDOM from "react-dom";


const PostModal= (props)=>{
    return ReactDOM.createPortal(
        <div  className="ui dimmer modals visible active">
               <div onClick={e => e.stopPropagation()} className="ui standard modal visible active">
                    <div className="header">
                      
                    <i className="fa fa-times" onClick={props.onDismiss}  aria-hidden="true"></i>  
                   
                    </div>
                    <div className="content">
                    {props.form}
                    </div>
                    <div className="actions">
                      
                    </div>
                </div>
        </div>,
        document.getElementById("postModal")
    )
}


export default PostModal;