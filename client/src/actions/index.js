
import posts from "../api/posts";
import history from "../component/history";
export const CREATE_POST = 'CREATE_POST'
export const FETCH_POST = 'FETCH_POST'
export const FETCH_POSTS = 'FETCH_POSTS'
export const DELETE_POST = 'DELETE_POST'
export const EDIT_POST = 'EDIT_POST'




export const createPost = (formValues) => async (dispatch,getState) => {
   console.log(formValues)
  const response = await  posts.post('/create',formValues)
    dispatch({
        type:CREATE_POST,
        payload:response.data
    })
    history.push("/")
}


export const fetchPosts = () => async dispatch => {
    const response = await  posts.get('/allPost')
      dispatch({
          type:FETCH_POSTS,
          payload:response.data
      })
  }

  
export const fetchPost = (id) => async dispatch => {
    const response = await  posts.get(`/post/${id}`)
      dispatch({
          type:FETCH_POST,
          payload:response.data
      })
  }

  export const editPost = (id,formValues) => async dispatch => {
    const response = await  posts.patch(`/post/${id}`,formValues)
      dispatch({
          type:EDIT_POST,
          payload:response.data
      })
      history.push("/")
  }
  export const deletePost = (id) => async dispatch => {
     console.log(id)
   await  posts.delete(`/post/${id}`)
      dispatch({
          type:DELETE_POST,
          payload:id
      })
      history.push("/")
  }