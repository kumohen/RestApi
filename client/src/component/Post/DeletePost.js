import React, { Component } from 'react';
import Modal from "../Modal";
import {fetchPost,deletePost} from "../../actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import history from "../history";

class DeletePost extends Component {
    componentDidMount(){
        this.props.fetchPost(this.props.match.params.id);
       
    }
    renderActions(){
        return (
            <>
            <button onClick={() => this.props.deletePost(this.props.match.params.id)}
             className="ui button negative">delete</button>
            <Link to="/" className="ui button ">cancel</Link>
        </>
        )
    }
    render() {
        return (
            <div>
                <Modal
                 actions={this.renderActions()}
                 onDismiss={()=> history.push("/")}
                />
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        posts:state.posts.list
    }
}
export default connect(mapStateToProps,{fetchPost,deletePost})(DeletePost);