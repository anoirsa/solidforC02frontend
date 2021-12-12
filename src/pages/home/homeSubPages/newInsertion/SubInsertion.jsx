import { useState } from "react";
import React from "react";
import Button from "../../../../components/button/Button";
import { CMP_SUB_INPUTS, INPUTS_FOCUS } from "../../../../globals/GlobalRd";
import {
  SubCompAdd,
  SubCompSum,
  ButtonSection,
  InputWrapper,
} from "./NewInsertionSC";
import { useFocuses, useInputsSubs } from "./useForm";

const SubInsertion = ({ setFillingForm, addSubComponent }) => {
  const [submitted, setSubmitted] = useState(false);
  const { state, setInputFocus } = useFocuses();
  const { inputsSub, handleChangeInput } = useInputsSubs();
  const {
    subProductFocus,
    subIdentifierFocus,
    subEmmissionFocus,
    amountFocus,
  } = state;
  const {
    subProductName,
    subIdentifier,
    subProductEmission,
    amount,
  } = inputsSub;

  return !submitted ? (
    <SubCompAdd
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <p>Sub-components details: </p>
      <InputWrapper focused={subProductFocus} insertion={true}>
        <input
          type="text"
          name={CMP_SUB_INPUTS.PRODUCT}
          value={subProductName}
          onChange={(e) => handleChangeInput(e)}
          onFocus={() =>
            setInputFocus({ name: INPUTS_FOCUS.SUB_PRODUCT_FOCUS, set: true })
          }
          onBlur={() =>
            setInputFocus({ name: INPUTS_FOCUS.SUB_PRODUCT_FOCUS, set: false })
          }
          placeholder="Name of sub-component"
        />
      </InputWrapper>
      <InputWrapper focused={subIdentifierFocus} insertion={true}>
        <input
          type="text"
          name={CMP_SUB_INPUTS.IDENTIFIER}
          value={subIdentifier}
          onChange={(e) => handleChangeInput(e)}
          onFocus={() =>
            setInputFocus({
              name: INPUTS_FOCUS.SUB_IDENTIFIER_FOCUS,
              set: true,
            })
          }
          onBlur={() =>
            setInputFocus({
              name: INPUTS_FOCUS.SUB_IDENTIFIER_FOCUS,
              set: false,
            })
          }
          placeholder="Identifier"
        />
      </InputWrapper>
      <InputWrapper focused={subEmmissionFocus} insertion={true}>
        <input
          type="text"
          name={CMP_SUB_INPUTS.EMISSION}
          value={subProductEmission}
          onChange={(e) => handleChangeInput(e)}
          onFocus={() =>
            setInputFocus({ name: INPUTS_FOCUS.SUB_EMISSION_FOCUS, set: true })
          }
          onBlur={() =>
            setInputFocus({ name: INPUTS_FOCUS.SUB_EMISSION_FOCUS, set: false })
          }
          placeholder="CO2 Emissions"
        />
      </InputWrapper>
      {/** Adding the anount input */}
      <InputWrapper focused={amountFocus} insertion={true}>
        <input
          type="text"
          name={CMP_SUB_INPUTS.AMOUNT}
          value={amount}
          onChange={(e) => handleChangeInput(e)}
          onFocus={() =>
            setInputFocus({ name: INPUTS_FOCUS.AMOUNT, set: true })
          }
          onBlur={() =>
            setInputFocus({ name: INPUTS_FOCUS.AMOUNT, set: false })
          }
          placeholder="Amount"
        />
      </InputWrapper>

      {/**  */}
      <ButtonSection>
        <Button
          buttonSize="btn--small"
          functionGiven={(e) => addSubComponent(e, inputsSub, setSubmitted)}
          textGiven="Add"
        />
        <Button buttonSize="btn--small" textGiven="Cancel" />
      </ButtonSection>
    </SubCompAdd>
  ) : (
    // When  a sub-component is submitted
    <SubCompSum
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <p>Sub-component is added to the total</p>
      <Button
        textGiven="Previous"
        buttonSize="btn--small"
        functionGiven={() => setFillingForm(false)}
      />
    </SubCompSum>
  );
};

export default SubInsertion;
