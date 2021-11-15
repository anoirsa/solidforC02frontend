import styled, { css } from "styled-components/macro";
import {motion}  from 'framer-motion'


const styledCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled(motion.div)`
  width: 100%;
  height: 80%;
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
  h4 {
    margin-top: 20px;
    font-weight: 500;
    font-size: 1.6rem;
  }
  p {
    margin-top: 40px;
  }
`;

const QuestionSection = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  justify-content: center;
  h5 {
    font-weight: 400;
    margin-top: 10px;
    font-size: 15px;
  }
`;

const ButtonSection = styled.div`
  ${styledCenter}
  flex-direction: row;
  gap: 40px;
  width: 100%;
  margin-top: 20px;
`;

export { Wrapper, Container, QuestionSection, ButtonSection };
