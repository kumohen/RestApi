import React, { Component } from 'react';
import {fetchPosts,deletePost} from "../../actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class PostList extends Component {
    componentDidMount(){
        this.props.fetchPosts();
    }
    renderButton = (id)=>{
        return (
            <>
            {/* <button onClick= {() => this.props.deletePost(id)} >delete</button> */}
            <Link to={`/post/delete/${id}`} className="ui basic red button " style={{width:"40s"}}>delete</Link >
            <Link to={`/post/edit/${id}`} className="ui basic green button ">edit</Link >
            </>
        )
    }
    renderList = ()=>{
     
        const list = (this.props.posts) 
        return list  && list.posts.map(item => {
            return (
                <div key={item.title} className="ui cards">
                    <div className="card" style={{width:'40%'}}>
                        <div className="content">
                            <div className="header">
                              {item.title}
                            </div>
                            <div className="description">
                             {item.content}
                            </div>
                        </div>
                        <div className="extra content">
                            <div className="ui two buttons">
                             {this.renderButton(item._id)}
                            </div>
                        </div>
                    </div>
                   </div>    
            )
        }
    
   )
    }
    render() {
        const list = (this.props.posts)
        if(list){
            list.posts && list.posts.map(item => console.log(item.title))
        }
  
        return (
            <div>
             {this.renderList()}
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return {
        posts:state.posts.list
    }
}
export default connect(mapStateToProps,{fetchPosts,deletePost})(PostList);