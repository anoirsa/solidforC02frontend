import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";

const customCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  position: sticky;
  width: 100%;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  gap: 10px;
  padding: 0 10px;
`;

const ItemLink = styled(Link)`
  text-decoration: none;
  min-width: 90px;
  padding: 0 10px;
  ${customCenter}
  height: 80%;
  border-right: 1.5px solid #ffffff;
  .inside--link {
    height: 80%;
    width: 100%;
    ${customCenter}
    transition: all 300ms ease-out;
    &:hover {
      opacity: 0.6;
      border-bottom: 1px solid #ffffff;
      transform: translateY(-2px);
      transition: all 300ms ease-out;
    }
  }
  .item--text {
    cursor: pointer;
    color: #ffffff;
    font-weight: 400;
  }
`;
/**
 rgba(146, 104, 104, 07)
 */

export { Container, Wrapper, ItemLink };
