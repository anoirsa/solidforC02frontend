import React, { useState } from "react";
import Button from "../../../../components/button/Button";
import {
  Container,
  Wrapper,
  InputWrapper,
  ButtonSection,
} from "../chcekProduct/ProductCheckerSC";

/**
 - Notes: 
 - The styled components of this function are imported from the product checkerSC
 */


const NewInsertion = ({setService}) => {
  const [focusForName, setFocusForName] = useState(false);
  const [focusForCountry, setFocusForCountry] = useState(false);
  const [focusForIdentifier, setFocusForIdentifier] = useState(false);
  const [focusForEmissions, setFocusForEmissions] = useState(false);

  return (
    <Container
    initial = {{opacity :0 , x: -100}}
    animate = {{opacity : 1, x:0, transition:{duration : 1}}}
    >
      <Wrapper>
        <h2>Solid for CO2</h2>
        <p>Insert the C02 emissions details for your new product</p>
        <InputWrapper focused={focusForName} insertion={true}>
          <input
            type="text"
            onFocus={() => setFocusForName(true)}
            onBlur={() => setFocusForName(false)}
            placeholder="Name of product"
          />
        </InputWrapper>
        <InputWrapper focused={focusForCountry} insertion={true}>
          <input
            type="text"
            onFocus={() => setFocusForCountry(true)}
            onBlur={() => setFocusForCountry(false)}
            placeholder="Country of origin"
          />
        </InputWrapper>
        <InputWrapper focused={focusForIdentifier} insertion={true}>
          <input
            type="text"
            onFocus={() => setFocusForIdentifier(true)}
            onBlur={() => setFocusForIdentifier(false)}
            placeholder="Identifier"
          />
        </InputWrapper>
        <InputWrapper focused={focusForEmissions} insertion={true}>
          <input
            type="text"
            onFocus={() => setFocusForEmissions(true)}
            onBlur={() => setFocusForEmissions(false)}
            placeholder="Product C02 emissions"
          />
        </InputWrapper>
        <ButtonSection>
            <Button textGiven="Back" functionGiven={setService} />
            <Button textGiven="Proceed" />

        </ButtonSection>
      </Wrapper>
    </Container>
  );
};

export default NewInsertion;
