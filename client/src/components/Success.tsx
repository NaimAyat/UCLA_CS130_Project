import * as React from "react";
import Page from "./Page";
import { Message } from "semantic-ui-react";

const Success: React.SFC = () => {
  return (
    <Page header="Thanks for your submission!">
      <Message success>
        <Message.Header>Success!</Message.Header>
        We'll email you with updates on the status of your application.
      </Message>
    </Page>
  );
};

export default Success;
