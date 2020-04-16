import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

const LoginPage = () => (
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
      <Checkbox label="Remember me" />
    </Form.Field>
    <Button type="submit">Log In</Button>
  </Form>
);

export default LoginPage;
