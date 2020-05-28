import {CREATE_POST,EDIT_POST,DELETE_POST,FETCH_POST,FETCH_POSTS} from "../actions";


export default (state={},action) => {
  switch(action.type){
      case FETCH_POSTS:
          return {...state, list:action.payload}
      case FETCH_POST:
          return {...state,updatePost:action.payload}
      case CREATE_POST:
          return {...state,newpost:action.payload}
      case EDIT_POST:
          return {...state,newpost:action.payload}  
      case DELETE_POST:
          return  {...state,deletedPost:action.payload}      
      default :
       return state        
  }
}