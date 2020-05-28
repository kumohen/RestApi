import React, { Component } from 'react';
import {createPost} from "../../actions";
import {connect} from "react-redux";

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
    render() {

        return (
            <div>
              <form onSubmit={this.submitForm}>
                    <h2>Add a review </h2>

                    <div className="form_element">
                        <input type="text"
                        name="title"
                        placeholder="Enter title"
                        value={this.state.title}
                        onChange = {this.handleInput}
                       / >
                    </div>

                      <div className="form_element">
                        <input type="text"
                        name="content"
                        placeholder="Enter content "
                        value={this.state.content}
                        onChange = {this.handleInput}
                       / >
                    </div>

                   <button type="submit">Add Review </button>

                   
                </form>
            </div>
        );
    }
}

export default connect(null,{createPost})(CreatePost);