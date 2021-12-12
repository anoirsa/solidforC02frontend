import styled, { css } from "styled-components/macro";
//import motion from "framer-motion"

const ContainerModal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  margin: 0;
  background: #110e0e63;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerValue = styled.div`
  position: relative;
  width: 70vh;
  height: 60vh;
  background: #1f1e1e;
  border-radius: 3px;

  .close--icon {
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 40px;
    color: #ffffff;

    &:hover {
      opacity: 0.5;
    }
  }
`;

const entry = css`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffff;

  .header--input {
    font-size: 1.5rem;
    font-weight: 300;
  }
  .text--input {
    margin-top: 30px;
    font-weight: 200;
  }
`;

const SuccessfulEntry = styled.div`
  ${entry}
  .main--details-class {
    width: 60%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    justify-content: center;
    align-items: flex-start;
    & > p {
      font-size: 14px;
      font-weight: 100;
      & > .field--detail {
        font-weight: 400;
      }
      & > .info--detail {
        text-decoration: underline;
      }
    }
  }
  .boxes--container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    gap: 7px;
  }
`;

const FailedEntry = styled.div`
  ${entry}
  .list--errors--container {
    width: 100%;
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    .container--error--text {
      font-weight: 300;
      font-size: 14px;
    }
    .list--errors--wrapper {
      font-weight: 200;
      font-size: 11px;
      margin-top: 15px;
      margin-bottom: 15px;
    }
    .error--advice {
      font-weight: 400;
      font-size: 15px;
      color: #f03131;
    }
  }
`;

export { ContainerModal, ContainerValue, SuccessfulEntry, FailedEntry };
