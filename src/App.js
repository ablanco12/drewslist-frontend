import React from "react";
import PostCards from "./components/PostCards.jsx";
import PostListing from "./components/PostListing.jsx";
import LoginPage from "./components/LoginPage.jsx";
import SignUpPage from "./components/SignUpPage.jsx";
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

  fetchPostListing = event => {
    event.preventDefault();
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify()
    };
    fetch(`http://localhost:3000/posts`, configObj)
      .then(resp => resp.json())
      .then(post => console.log("post:", post));
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
          <Route path="/login" render={() => <LoginPage />} />
          <Route path="/signup" render={() => <SignUpPage />} />
        </Switch>
      </div>
    );
  }
}

export default App;
