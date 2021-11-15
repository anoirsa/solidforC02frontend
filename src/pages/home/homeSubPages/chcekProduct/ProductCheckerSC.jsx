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

  p {
    margin-top: 60px;
  }
`;

const InputWrapper = styled.div`
   
    margin-top: ${({insertion}) => insertion ? '15px': '40px'};
    border-bottom: 2px solid #939191;
    width: ${({focused}) => focused ? '220px'  : '160px'};
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
            color: #ACA1A1;
            font-size: 15px;
        } 
    }
    
`;

const ButtonSection = styled.div`
  ${styledCenter}
  flex-direction: row;
  gap: 40px;
  width: 100%;
  margin-top: 60px;
`;


export { Container, Wrapper, InputWrapper, ButtonSection};
