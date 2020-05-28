import React, { Component } from 'react';
import {createPost} from "../actions";
import {connect} from "react-redux";
import Modal from "./PostModal";
import history from "./history";

class CreatePost extends Component {
    state={
        title:"",
        content:""
    }
    handleInput = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitForm = e =>{
        e.preventDefault();
        const {title,content} = this.state;
       var  formValues = {title,content} ;
        this.props.createPost(formValues);
    }
    FormRender = ()=>{
        return (
            <>
            <form onSubmit={this.submitForm} className="ui fluid form">
                    <h2>Add a review </h2>

                    <div className="field">
                        <input type="text"
                        name="title"
                        placeholder="Enter title"
                        value={this.state.title}
                        onChange = {this.handleInput}
                       / >
                            <div className="ui pointing label">
                                Please enter Title
                            </div>
                    </div>

                      <div className="field">
                        <input type="text"
                        name="content"
                        placeholder="Enter content "
                        value={this.state.content}
                        onChange = {this.handleInput}
                       / >
                              <div className="ui pointing label">
                                Please enter Content
                            </div>
                    </div>

                   <button type="submit" className="ui inverted primary button">Add Post </button>

                   
                </form>
           </> 
        )
    }
    render() {

        return (
            <div>
              <Modal  form={this.FormRender()}   onDismiss={()=> history.push("/")} />
            </div>
        );
    }
}

export default connect(null,{createPost})(CreatePost);