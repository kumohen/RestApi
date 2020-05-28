import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addTodo} from "../actions";

class Todos extends Component {
    state ={
        data:""
    }
     handleChange = e => {
        this.setState({data:e.target.value})
    }
    handleSubmit = ()=>{
        this.props.dispatch(addTodo(this.state.data))
    }
    render() {
        console.log(this.state.data)
        return (
       
            <div>
            <input  type="text" onChange={this.handleChange} />
            <button onClick={this.handleSubmit}>Submit</button>

            </div>
        );
    }
}
const mapStateToProps = state =>{
    console.log(state);
    return {

    }
}

export default connect(mapStateToProps)(Todos);