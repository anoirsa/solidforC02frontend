import React from "react";
import { ChatIcon, Container } from "./ChatbarSC";
import iconChat from "../../images/icons/Group.svg";

const Chatbar = () => {
  return (
    <Container>
      <ChatIcon src={iconChat} />
    </Container>
  );
};

export default Chatbar;
