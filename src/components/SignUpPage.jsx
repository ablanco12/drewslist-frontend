import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

const SignUpPage = () => (
  <div className="jumbotron">
    <Form>
      <Form.Field>
        <label>Email Username</label>
        <input placeholder="joe@schmoe.com" />
      </Form.Field>
      <Form.Field>
        <label>Enter Password</label>
        <input type="password" placeholder="Password" />
      </Form.Field>
      <Form.Field>
        <label>Enter Password Confirmation</label>
        <input type="password" placeholder="Password Confirmation" />
      </Form.Field>

      <Button type="submit">Create Account</Button>
    </Form>
  </div>
);

export default SignUpPage;
