import {signIn,signOut} from './components/authentication';


const baseState=
{
    userName:'guest',
    loginInfo:false,
    user:''
}



export function reducer(state=baseState,action)
{
    if(action.type==="LoginClick")
    {
        let usr=signIn();
        console.log("logininfo"+usr);
        return{
            loginInfo:true,
            userName:'arun',
       
        }
        
    }
    else if(action.type==="LogoutClick")
    {
        return{
            loginInfo:false,
            userName:'guest'
        }
    }else {
    
    return state;
    }
    


}