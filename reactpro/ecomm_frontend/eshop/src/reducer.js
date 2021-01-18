//reducer concept //create initial state


const initialState=
{
  logininfo:false,
  message:"please sign in to see the products",
  username:'arun',
  noofproducts:0

};
//reducer function //pass the state.
export function reducer(state=initialState,action)
{
  console.log("action type="+action.type);
  //let's update the state based on action.
  if(action.type==="LoginClick")
  {
    return {logininfo:true,username:"rao"}

  }
  else if(action.type==="LogoutClick")
  {
    return {logininfo:false,username:"arun"}
  }
  return state;

}
//pass function to reducer.
 
 
