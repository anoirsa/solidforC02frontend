import React from "react";
import { Close } from "@material-ui/icons";
// Import project components;
import { CookieContainer, CookieContainerWrapper } from "./CookieChartSC";

const CookieChart = ({ setShowCookie }) => {
  return (
    <CookieContainer
      initial={{ opacity: 0, transitionDuration: 2 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <CookieContainerWrapper>
        <p>
          We use cookies to give you the best experience.{" "}
          <span>Cookie Policy</span>
        </p>
        <Close className="close--icon" onClick={() => setShowCookie(false)} />
      </CookieContainerWrapper>
    </CookieContainer>
  );
};

export default CookieChart;
