import styled, { css } from "styled-components/macro";

const centerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 90%;
  max-width: 800px;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 3px;
  border: 1.5px solid rgba(0, 0, 0, 0.44);
  ${centerStyle}
`;

const Container = styled.div`
  margin-top: 3vh;
  width: 100%;
  height: 83vh;
  padding: 5px 10px;
  ${centerStyle}
`;

export { Container, Wrapper };
