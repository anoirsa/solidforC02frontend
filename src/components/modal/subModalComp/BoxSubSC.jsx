import styled, { css } from "styled-components/macro";

const customCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoxContainer = styled.div`
  padding: 10px 15px;
  background: #ffff;
  position: relative;
  border-radius: 3px;
  color: #1f1e1e;
  font-size: 0.8rem;
  ${customCenter}
  cursor: pointer;
  &:hover {
    background: #1f1e1e;
    color: #ffff;
    transition: 250ms all ease-out;
    .icon--see {
      color: #ffff;
    }
  }

  .icon--see {
    color: #1f1e1e;
  }
`;

const InfosSub = styled.div`
  position: fixed;
  z-index: 900;
  padding: 10px 20px;
  display: none;
  font-size: 12px;
  background: #ffff;
  color: #1f1e1e;
  transform: translate(0px, 55px);
  ${BoxContainer}:hover & {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

const SubName = styled.div`
  ${customCenter}
`;

export { BoxContainer, SubName, InfosSub };
