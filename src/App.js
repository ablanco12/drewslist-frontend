import React from "react";
import PostCards from "./components/PostCards.jsx";
import { Route, Switch } from "react-router-dom";
import MainPage from "./components/MainPage.jsx";
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
          <Route>
            <MainPage />
          </Route>
          <Route>
            <PostCards postData={this.state.postData} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
