import React, { Component } from "react";
import { firebase } from "../dbconfig/firebaseconfig";
class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
    };
  }
  componentDidMount() {
    const fireBaseRef = firebase.database().ref("blogs");
    fireBaseRef.on("value", (snapshot) => {
      const blogList = [];
      const blogListRawData = snapshot.val();

      console.log("blog list  raw =" + blogListRawData);
      //let's get blogs from RawData
      for (let blog in blogListRawData) {
        blogList.push({ blog, ...blogListRawData[blog] });
      }
      console.log("blog list" + blogList);
      this.setState({ blogs: blogList });
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
                <th>blogdiscription</th>
                <th>blogowner</th>
              </tr>
            </thead>
            <tbody>
              {this.state.blogs.map((blog) => (
                <tr>
                  <td>{blog.blogid}</td>
                  <td>{blog.blogtitle}</td>
                  <td>{blog.blogdiscription}</td>
                  <td>{blog.blogowner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Blogs;
