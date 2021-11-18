import { useReducer } from "react";
import { ACTIONS } from "../../../../globals/GlobalRd";

const reducerOne = (state, action) => {
  switch (action.type) {
    case ACTIONS.FILL_FORM:
      return { ...state, isFillingSub: !state.isFillingSub };

    case ACTIONS.FOCUS_SET: {
      return { ...state, [action.playload.name]: action.playload.set };
    }
    default:
      break;
  }
};

const useFocuses = () => {
  const [state, dispatch] = useReducer(reducerOne, {
    isFillingSub: false,
    productFocus: false,
    countryFocus: false,
    identifierFocus: false,
    emissionFocus: false,
    subProductFocus: false,
    subIdentifierFocus: false,
    subEmmissionFocus: false,
  });

  const setInputFocus = ({ name, set }) => {
    dispatch({ type: ACTIONS.FOCUS_SET, playload: { name, set } });
  };
  const setFillingForm = () => {
    dispatch({ type: ACTIONS.FILL_FORM });
  };
  return { state, setInputFocus, setFillingForm };
};
// A Reducer function assigned to main-components inputs

const reducerTwo = (inputsMain, action) => {
  switch (action.type) {
    case ACTIONS.INPUT_SET:
      return { ...inputsMain, [action.playload.name]: action.playload.value };
    case ACTIONS.ADD_SUB_TO_MAIN: 
      return {...inputsMain, subComponents: [...inputsMain.subComponents, action.playload.value]}  

    default:
      break;
  }
};
///

const useInputsMain = () => {
  const [inputsMain, dispatch] = useReducer(reducerTwo, {
    productName: "",
    countryOrigin: "",
    identifer: "",
    productEmission: "",
    subComponents: []

  });
  

  const handleChangeInput = (e) => {
    dispatch({
      type: ACTIONS.INPUT_SET,
      playload: { name: e.target.name, value: e.target.value },
    });
  };

  const addSubComponent = (e, value, callback) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_SUB_TO_MAIN, playload: { value } });
    callback(true);
  };

  return { inputsMain, handleChangeInput, addSubComponent };
};

// A Reducer function assigned to sub-components inputs
const reducerThree = (inputsSub, action) => {
  switch (action.type) {
    case ACTIONS.INPUT_SET:
      return { ...inputsSub, [action.playload.name]: action.playload.value };

    default:
      break;
  }
};

///

const useInputsSubs = () => {
  const [inputsSub, dispatch] = useReducer(reducerThree, {
    subProductName: "",
    subIdentifier: "",
    subProductEmission: "",
  });

  const handleChangeInput = (e) => {
    dispatch({
      type: ACTIONS.INPUT_SET,
      playload: { name: e.target.name, value: e.target.value },
    });
  };
  return { inputsSub, handleChangeInput };
};

export { useFocuses, useInputsMain, useInputsSubs };
