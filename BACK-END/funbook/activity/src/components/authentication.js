import {auth,provider} from './dbconfig/firebaseconfig';
const signIn=async()=>
{
    let user;
    await auth.signInWithPopup(provider)
    .then((res)=>{
        console.log("user info:"+res.user);
        user=res.user;

    })
    .catch((error)=>
    {
        console.log(error.message);

    })
    return user;
};

const signOut=()=>
{
     auth.signOut()
   /* .then(() => {
        navigator.pop();
    }*/
   .then(()=>
    {
        //signout
    }).catch((error)=>
    {
        console.log(error.message);
    })
};

export {signIn,signOut};