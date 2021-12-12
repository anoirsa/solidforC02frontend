import styled from "styled-components/macro";

const Container = styled.div`
  position: absolute;
  left: 5px;
  bottom: 12px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.44);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  transition: all 300ms ease-out;
  &:hover {
    opacity: 0.5;
    transform: translateY(-3px);
    transition: all 300ms ease-out;
  }
`;

const ChatIcon = styled.img``;

export { Container, ChatIcon };
