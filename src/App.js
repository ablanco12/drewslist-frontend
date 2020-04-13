import React from "react";
import PostCards from "./components/PostCards.jsx";
import PostListing from "./components/PostListing.jsx";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import "./App.css";

class App extends React.Component {
  state = {
    postData: []
  };

  async componentDidMount() {
    this.fetchPosts();
    // const response = await fetch(`http://localhost:3000/posts`);
    // const json = await response.json();
    // console.log(json, "json");
  }

  fetchPosts = () => {
    fetch(`http://localhost:3000/posts`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          postData: data
        });
      });
  };

  render() {
    return (
      <div>
        <Switch>
          <Route path="/home" render={() => <HomePage />} />
          <Route path="/post" render={() => <PostListing />} />
          <Route
            path="/listings"
            render={() => <PostCards postData={this.state.postData} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
