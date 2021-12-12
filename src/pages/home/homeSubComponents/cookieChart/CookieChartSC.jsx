import styled from "styled-components";
import { motion } from "framer-motion";

const CookieContainer = styled(motion.div)`
  position: fixed;
  bottom: 8vh;
  left: 50%;
  transform: translateX(-50%);
  width: 60vh;
  height: 5vh;
  background: rgba(88, 87, 87, 0.9);
  z-index: 200;
  border-radius: 3px;
`;

const CookieContainerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 5px;
  color: #ffff;
  font-weight: 300;
  gap: 8px;
  p {
    font-size: 14px;
  }
  span {
    font-weight: 800;
  }
  .close--icon {
    font-size: 20px;
    color: #ffffff;

    &:hover {
      opacity: 0.5;
    }
  }
`;

/**
   position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
 */

export { CookieContainer, CookieContainerWrapper };
