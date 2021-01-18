import React, { Component } from 'react';
import {firebase} from '../dbconfig/firebaseconfig';
import {connect} from 'react-redux';
//import {signIn,signOut} from '../authentication';

class AddBlogs extends Component {
    constructor(props) {
        super(props);
        this.state={
            blogid:'',
            blogtitle:'',
            blogdescription:'',
            blogowner:''
        }
        
    }
    /*
    componentDidMount()
    {
        const fbRef=firebase.database().ref('blogs');
        fbRef.on('value',(snapshot)=>{
         const blogdetails=snapshot.val;
         console.log(blogdetails);
         const bloglist=[];
         for(let p in blogdetails)
         {
             bloglist.push(p,...blogdetails[p]);
         }
         console.log(bloglist);
         this.setState({blogdet:bloglist});




        });
       

    }*/
    storeBlog(e)
    {
        this.setState({[e.target.name]:e.target.value})
        //console.log(this.state(e));

    }
    addblog(e)
    {
        e.preventDefault();
        //assign state to obj
        const blog=
        {
            blogid:this.state.blogid,
            blogtitle:this.state.blogtitle,
            blogdescription:this.state.blogdescription,
            blogowner:this.state.blogowner
        }
        //firebase ref
        const fbRef=firebase.database().ref('blogs');
        console.log("bloginfo"+fbRef);
        //push to firebase
        fbRef.push(blog);
        this.setState({blogid:'',blogdescription:'',blogowner:'',blogtitle:''})


    }
    
    render() {
        return (
            <div>
            
            {
                
                //to login when it is  only true
                this.props.signinInfo?
                
                
         
         <form method="POST" onSubmit={this.addblog.bind(this)}>
         
         <div class="form-group">
         <label for="blogid">blogid</label>
         <input type="text" class="form-control" placeholder="Enter id" name="blogid" onChange={this.storeBlog.bind(this)} value={this.state.blogid} required/> 
         </div>
         <div class="form-group">
         <label for="blogtitle">blogtitle</label>
         <input type="text" class="form-control"  placeholder="Enter name" name="blogtitle" onChange={this.storeBlog.bind(this)} value={this.state.blogtitle} required/>
         </div>
         <div class="form-group">
         <label for="blogdescription">blogdescription</label>
         <input type="text" class="form-control"  placeholder="Enter desc" name="blogdescription" onChange={this.storeBlog.bind(this)}value={this.state.blogdescription} required/>
         </div>
         <div class="form-group">
         <label for="blogowner">blogowner</label>
         <input type="text" class="form-control"  placeholder="Enter owner" name="blogowner" onChange={this.storeBlog.bind(this)} value={this.state.blogowner} required/>
         </div>
         
         
         
         <button type="submit" class="btn btn-primary">Submit</button>
        
         </form>:
          <h2>please sign in to add a blog</h2>
            }
     </div>

            
            

           
        );
    }
}

const f1=(state)=>({uName:state.userName,signinInfo:state.loginInfo})
export default connect(f1)(AddBlogs);