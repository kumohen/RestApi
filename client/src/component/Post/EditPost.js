import React, { Component } from 'react';
import {fetchPost,editPost} from "../../actions";
import {connect} from "react-redux";

class EditPost extends Component {
    state={
        title:"",
        content:""
    }
    handleInputTitle = (e)=>{
       this.setState({
           title:e.target.value
       })
    }
    handleInputContent = (e)=>{
        this.setState({
            content:e.target.value
        })
     }
    componentDidMount(){
        this.props.fetchPost(this.props.match.params.id);
       
    }
    componentWillReceiveProps(nextProps){
       this.setState({
           title:nextProps.posts.post.title,
           content:nextProps.posts.post.content
       })
      
    }
    submitForm = e =>{
        e.preventDefault();
        const {title,content} = this.state;
        var  formValues = {title,content} ;
   
        const id = this.props.match.params.id ;
        this.props.editPost( id ,formValues);
    }
    render() {
      
        return (
            <div> 
        
              <form onSubmit={this.submitForm} className="ui fluid form">
                    <h2>Add a review </h2>

                    <div className="field">
                        <input type="text"
                        name="title"
                        placeholder="Enter title"
                        value={this.state.title}
                        onChange = {this.handleInputTitle}
                       / >
                            <div className="ui pointing label">
                               Edit Your Title
                            </div>
                    </div>

                      <div className="field">
                        <input type="text"
                        name="content"
                        placeholder="Enter content "
                        value={this.state.content}
                        onChange = {this.handleInputContent}
                       / >
                            <div className="ui pointing label">
                               Edit Your Description
                            </div>
                    </div>

                   <button type="submit" className="ui inverted primary button">Submit</button>

                   
                </form>
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return {
        posts:state.posts.updatePost
    }
}
export default connect(mapStateToProps,{fetchPost,editPost})(EditPost);