import React, { Component } from 'react';
import { signIn } from '../authentication';
import { firebase }  from '../dbconfig/firebaseconfig';
class AddBlog extends Component {
    constructor(props)
    {
     super(props);
     this.state = 
     {
         blog_id: '',
         blog_title: '',
         blog_discription: '',
         blog_owner: ''

     }
    }
    storeBlog(e)
    {
this.setState({[e.target.name]:e.target.value})
//console.log(this.state)
    }
    addBlog(e)
    {
        e.preventDefault();
        //assign state to blog object
     const  blog =
     {
           blogid: this.state.blog_id,
           blogtitle: this.state.blog_title,
           blogowner: this.state.blog_owner,
           blogdiscription: this.state.blog_discription

     }
     //create firebase reffrence
     const  fireBaseRef = firebase.database().ref('blogs');

     //push blog object into firebase
     fireBaseRef.push(blog)

    }
     
    render() {
        return (
            <div>
    
                <form onSubmit={this.addBlog.bind(this)}  >
                    <>
    <div class="form-group">
      <label for="blogid">blogid:</label>
      <input type="text" class="form-control"  placeholder="Enter blog id"
       name="blog_id" onChange={this.storeBlog.bind(this)} />
    </div>
    
    <div class="form-group">
      <label for="blogtitle">blogtitle:</label>
      <input type="text" class="form-control" placeholder="Enter title" 
      name="blog_title"  onChange={this.storeBlog.bind(this)}/>
    </div>
    <div class="form-group">
      <label for="blogowner">blogowner:</label>
      <input type="text" class="form-control"  placeholder="Enter blog owner" 
      name="blog_owner" onChange={this.storeBlog.bind(this)} />
    </div>
    <div class="form-group">
      <label for="blogdiscription">blogdiscription:</label>
      <input type="text" class="form-control"  placeholder="Enter blog discription"
       name="blog_discription"  onChange={this.storeBlog.bind(this)}/>
    </div>
    </>
    <button type="submit" class="btn btn-primary">AddBlog</button>
  </form>

</div>
        );
    }
}

export default AddBlog;