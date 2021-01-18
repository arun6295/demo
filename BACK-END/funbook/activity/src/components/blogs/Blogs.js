import React, { Component } from 'react';
import {firebase} from '../dbconfig/firebaseconfig';

class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state=
    {
      blogs:[]
    }
  }
  
  componentDidMount()
  {
      const fbRef=firebase.database().ref('blogs');
      fbRef.on('value',(snapshot)=>
      {
       const blogdetails=snapshot.val();
       console.log("blogdetails"+blogdetails);

       const blogList=[];
       for(let p in blogdetails)
       {
           blogList.push({p, ...blogdetails[p]});
       }
       console.log(blogList);
       this.setState({blogs:blogList});

      });
  
  }

    render() {
        return (
            <div>
               

<div class="container">
             
  <table class="table table-striped">
    <thead>
      <tr>
        <th>blogid</th>
        <th>blogtitle</th>
        <th>blogdescription</th>
        <th>blogowner</th>
      </tr>
    </thead>
    <tbody>
      {
        this.state.blogs.map(blog=>
        <tr>
        <td>{blog.blogid}</td>
        <td>{blog.blogtitle}</td>
        <td>{blog.blogdescription}</td>
        <td>{blog.blogowner}</td>
      </tr>)
          

          

      }
      
     
    </tbody>
  </table>
</div>



            </div>
        );
    }
}

export default Blogs;