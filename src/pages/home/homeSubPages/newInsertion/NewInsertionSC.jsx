import styled, { css } from "styled-components/macro";
import { motion } from "framer-motion";

const styledCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled(motion.div)`
  width: 100%;
  height: 99%;
  padding: 10px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    color: #af9292;
    font-weight: 700;
    font-size: 2rem;
  }

  .intro--text {
    margin-top: 20px;
  }
`;

const InputWrapper = styled.div`
  margin-top: ${({ insertion }) => (insertion ? "5px" : "40px")};
  border-bottom: 2px solid #939191;
  width: ${({ focused }) => (focused ? "220px" : "160px")};
  transition: all 300ms ease-out;
  height: 40px;

  input {
    height: 100%;
    background: transparent;
    outline: none;
    border: none;
    color: #535050;
    font-size: 15px;
    &::placeholder {
      color: #aca1a1;
      font-size: 15px;
    }
  }
`;

const ButtonSection = styled.div`
  ${styledCenter}
  flex-direction: row;
  gap: 20px;
  width: 100%;
  margin-top: 15px;
`;

///// These components are applied the inset sub-component class

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .error--text {
    text-align: start;
    font-size: 10px;
    margin-top: 4px;
    color: red;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const InsertionSection = styled.div`
  width: 100%;
  height: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  margin-top: 2.5rem;
`;

const SubCompAdd = styled(motion.div)`
  ${styledCenter}
  flex-direction: column;
  p {
    font-size: 12px;
  }
`;

// The word sum refeeres to 'Submit'
const SubCompSum = styled(motion.div)`
  ${styledCenter}
  flex-direction: column;
  gap: 15px;

  p {
    font-size: 14px;
    color: #4d4242;
  }
`;

///// These components are applied the ListSubcomponents class

const ListCompWrapper = styled(motion.div)`
  ${styledCenter}
  flex-direction: column;
  width: 100%;
  overflow: visible;
`;

const ItemWrapper = styled.div`
  ${styledCenter}
  position: relative;
  width: 50%;
  height: 2rem;
  border-radius: 3px;
  margin-bottom: 4px;
  padding: 0 5px;
  background: #47464648;
  border: 1px solid #1d1c1cd8;
  cursor: pointer;
  overflow: visible;

  .inner--wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    h5 {
      font-size: 15px;
      width: 20%;
      font-weight: 400;
    }
    .product--name {
      text-align: start;
      width: 80%;
    }
  }
  

  &:hover {
    opacity: 0.8;
  }
`;

const Infos = styled.div`
  position: fixed;
  overflow: hidden;
  display: none;
  transform: translate(120px, -30px);
  width: 200px;
  padding: 5px 10px;
  border-radius: 3px;
  background: #383737d5;
  z-index: 200;

  ${ItemWrapper}:hover & {
    display: flex;
    flex-direction: column;
    h6 {
      color: white;
      font-size: 10px;
      font-weight: 400;
      margin-top: 5px;
    }
  }
`;

export {
  Container,
  Wrapper,
  InputWrapper,
  ButtonSection,
  LeftSection,
  InsertionSection,
  RightSection,
  SubCompAdd,
  SubCompSum,
  ListCompWrapper,
  ItemWrapper,
  Infos,
};
