import React, { Component } from "react";
import { Card, Icon, Image } from "semantic-ui-react";

class CardExampleColumnCount extends Component {
  render() {
    const postData = this.props.postData;
    console.log("POST DATA:", postData);
    return (
      <div>
        <Card.Group itemsPerRow={6}>
          {postData.map(post => (
            <Card>
              <Image
                src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>{post.title}</Card.Header>
                <Card.Meta>${post.price}</Card.Meta>
                <Card.Description>{post.body}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a href="#">
                  <Icon name="location arrow" />
                  {post.location}
                </a>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </div>
    );
  }
}

export default CardExampleColumnCount;
