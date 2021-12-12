import React from "react";
import Button from "../../../../components/button/Button";
import { CMP_MAIN_INPUTS, INPUTS_FOCUS } from "../../../../globals/GlobalRd";
import {
  Container,
  Wrapper,
  InputWrapper,
  ButtonSection,
  LeftSection,
  RightSection,
  InsertionSection,
} from "./NewInsertionSC";
import SubCompList from "./SubCompList";
import SubInsertion from "./SubInsertion";
import { useFocuses, useInputsMain } from "./useForm";
import { mainCmpValidator } from "./validator";

/**
 - ../chcekProduct/ProductCheckerSC
 - Notes: 
 - The styled components of this function are imported from the product checkerSC
 */

const NewInsertion = ({ setService }) => {
  const { state, setInputFocus, setFillingForm } = useFocuses();
  const { inputsMain, handleChangeInput, addSubComponent, submitTheForm, errors} = useInputsMain(mainCmpValidator);
  const {
    productFocus,
    countryFocus,
    identifierFocus,
    emissionFocus,
    isFillingSub,
  } = state;
  const {
    productName,
    countryOrigin,
    identifer,
    productEmission,
    subComponents,
  } = inputsMain;

  // Debug
  //
  return (
    <Container
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
    >
      <Wrapper>
        <h2>Solid for CO2</h2>
        <p className="intro--text">Insert the C02 emissions details for your new product</p>

        <InsertionSection>
          <LeftSection>
            <p>Main component details:</p>
            <InputWrapper focused={productFocus} insertion={true}>
              <input
                type="text"
                value={productName}
                name={CMP_MAIN_INPUTS.PRODUCT}
                onChange={(e) => handleChangeInput(e)}
                onFocus={() =>
                  setInputFocus({ name: INPUTS_FOCUS.PRODUCT_FOCUS, set: true })
                }
                onBlur={() =>
                  setInputFocus({
                    name: INPUTS_FOCUS.PRODUCT_FOCUS,
                    set: false,
                  })
                }
                placeholder="Name of product"
              />
            </InputWrapper>
            {errors.productName && <p className="error--text">{errors.productName}</p>}
            <InputWrapper focused={countryFocus} insertion={true}>
              <input
                type="text"
                value={countryOrigin}
                name={CMP_MAIN_INPUTS.COUNTRY}
                onChange={(e) => handleChangeInput(e)}
                onFocus={() =>
                  setInputFocus({ name: INPUTS_FOCUS.COUNTRY_FOCUS, set: true })
                }
                onBlur={() =>
                  setInputFocus({
                    name: INPUTS_FOCUS.COUNTRY_FOCUS,
                    set: false,
                  })
                }
                placeholder="Country of origin"
              />
            </InputWrapper>
            {errors.countryOrigin && <p className="error--text">{errors.countryOrigin}</p>}
            <InputWrapper focused={identifierFocus} insertion={true}>
              <input
                type="text"
                value={identifer}
                name={CMP_MAIN_INPUTS.IDENTIFIER}
                onChange={(e) => handleChangeInput(e)}
                onFocus={() =>
                  setInputFocus({
                    name: INPUTS_FOCUS.IDENTIFIER_FOCUS,
                    set: true,
                  })
                }
                onBlur={() =>
                  setInputFocus({
                    name: INPUTS_FOCUS.IDENTIFIER_FOCUS,
                    set: false,
                  })
                }
                placeholder="Identifier"
              />
            </InputWrapper> 
            {errors.identifer && <p className="error--text">{errors.identifer}</p>}
            <InputWrapper focused={emissionFocus} insertion={true}>
              <input
                type="text"
                value={productEmission}
                name={CMP_MAIN_INPUTS.EMISSION}
                onChange={(e) => handleChangeInput(e)}
                onFocus={() =>
                  setInputFocus({
                    name: INPUTS_FOCUS.EMISSION_FOCUS,
                    set: true,
                  })
                }
                onBlur={() =>
                  setInputFocus({
                    name: INPUTS_FOCUS.EMISSION_FOCUS,
                    set: false,
                  })
                }
                placeholder="Product C02 emissions"
              />
            </InputWrapper>
            {errors.productEmission && <p className="error--text" >{errors.productEmission}</p>}
          </LeftSection>
          <RightSection>
            {!isFillingSub ? (
              <SubCompList
                subComponents={subComponents}
                setFillingForm={setFillingForm}
              />
            ) : (
              <SubInsertion
                addSubComponent={addSubComponent}
                setFillingForm={setFillingForm}
              />
            )}
          </RightSection>
        </InsertionSection>
        <ButtonSection>
          <Button textGiven="Back" functionGiven={setService} />
          <Button textGiven="Proceed" functionGiven={() => submitTheForm()}/>
        </ButtonSection>
      </Wrapper>
    </Container>
  );
};

export default NewInsertion;
