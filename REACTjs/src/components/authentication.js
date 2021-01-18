import {auth,provider} from './dbconfig/firebaseconfig';

 const signIn = async () =>
{
    let user;
    await auth.signInWithPopup(provider)
    .then((res)=> {
        console.log(res.user);
        user=res.user;
    })
    .catch((error) =>
    {
        console.log(error.message);
    })
    return user;
};

 const signout = () =>
{
    auth.signOut()
    .then(()=>{
        //signout 
    }).catch((error)=>{
console.log(error);
    })
};
export {signIn,signout};