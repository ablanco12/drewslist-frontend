import React from "react";
import { Form, Input, TextArea, Button, Select } from "semantic-ui-react";

// Use this data for dropdown menu

// const stateOptions = [
//   { key: "m", text: "Texas", value: "texas" },
//   { key: "f", text: "Nevada", value: "Nevada" },
//   { key: "o", text: "Other", value: "other" }
// ];

const PostListing = () => (
  <Form className="postform" onSubmit={this.props.fetchPostListing}>
    <h1>Create a Posting</h1>
    <Form.Group widths="equal">
      <Form.Field
        id="form-input-control-title"
        control={Input}
        label="Title"
        placeholder="Title"
      />
      <Form.Field
        id="form-input-control-price"
        control={Input}
        label="Price"
        placeholder="Price"
      />
      <Form.Field
        id="form-input-control-location"
        control={Input}
        label="Location"
        placeholder="Location"
      />
      <Form.Field
        id="form-input-control-zip-code"
        control={Input}
        label="Zip Code"
        placeholder="Zip Code"
      />
      {/* <Form.Field
        control={Select}
        options={stateOptions}
        label={{ children: "State", htmlFor: "form-select-control-state" }}
        placeholder="State"
        search
        searchInput={{ id: "form-select-control-state" }}
      /> */}
    </Form.Group>
    <Form.Field
      id="form-textarea-control-opinion"
      control={TextArea}
      label="Body"
      placeholder="Description"
    />
    <Form.Field
      id="form-input-control-error-email"
      control={Input}
      label="Email"
      placeholder="joe@schmoe.com"
      error={{
        content: "Please enter a valid email address",
        pointing: "below"
      }}
    />
    <Form.Field
      id="form-button-control-public"
      control={Button}
      content="Submit"
      label=""
    />
  </Form>
);

export default PostListing;
