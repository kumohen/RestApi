import React from 'react';
import ReactDOM from "react-dom";


const Modal= (props)=>{
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className="ui dimmer modals visible active">
               <div onClick={e => e.stopPropagation()} className="ui standard modal visible active">
                  
                    <div className="content">
                       <p>Are You sure to delete this post ? </p>
                    </div>
                    <div className="actions">
                         {props.actions}
                    </div>
                </div>
        </div>,
        document.getElementById("modal")
    )
}


export default Modal;