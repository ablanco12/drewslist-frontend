import React from "react";

import "./App.css";

class App extends React.Component {
  state = {
    postData: []
  };

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = () => {
    fetch(`https://localhost:3000/posts`)
      .then(resp => resp.json())
      .then(data => console.log("data:", data));
  };

  render() {
    return (
      <div>
        <h1>Welcome to drewsList!</h1>
        <h2>FOR SALE</h2>
      </div>
    );
  }
}

export default App;
