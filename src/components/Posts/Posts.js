import React, { Component } from "react";
import axios from "axios";

import Post from "./Post/Post";

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/journal")
      .then(response => {
        console.log(response.data);
        this.setState({ posts: response.data });
      })
      .catch(error => console.log(error));
  }

  onFullPostHandler = id => {
    this.props.history.push("/journal/" + id);
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="Posts">
        {posts &&
          posts.map(post => {
            console.log(post.id);
            return (
              <Post
                key={post.id}
                fullPostClicked={() => this.onFullPostHandler(post.id)}
                data={post}
              />
            );
          })}
      </div>
    );
  }
}

export default Posts;
