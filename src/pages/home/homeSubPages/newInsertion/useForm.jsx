import { useReducer, useEffect, useContext, useState } from "react";
import { Context } from "../../../../context/DataContext";
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
    amountFocus: false,
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
    case ACTIONS.CLEAR:
      return {
        productName: "",
        countryOrigin: "",
        identifer: "",
        productEmission: "",
        subComponents: [],
      };
    case ACTIONS.ADD_SUB_TO_MAIN:
      return {
        ...inputsMain,
        subComponents: [...inputsMain.subComponents, action.playload.value],
      };
    case ACTIONS.TOTAL_EMISSIONS_OF_ALL: {
      const { subComponents } = inputsMain;

      let totalValue = 0;
      subComponents.forEach((value) => {
        totalValue += value.totalCarbonEmission;
      });

      return { ...inputsMain, productEmission: totalValue };
    }

    default:
      break;
  }
};
///

const useInputsMain = (mainCmpValidator) => {
  const [inputsMain, dispatch] = useReducer(reducerTwo, {
    productName: "",
    countryOrigin: "",
    identifer: "",
    productEmission: 0,
    subComponents: [],
  });
  const { addNewComponent } = useContext(Context);
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSumbitting] = useState(false);

  const submitTheForm = () => {
      setErrors(mainCmpValidator(inputsMain))
      setIsSumbitting(true)
  }

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
  // function that counts the minium amount of emissions that must be in a main component
  const minEmissionsCount = () => {
    dispatch({ type: ACTIONS.TOTAL_EMISSIONS_OF_ALL });
  };

  
  useEffect(() => {
    minEmissionsCount();
  }, [inputsMain.subComponents.length]); 

  useEffect(() => {

    const doProcess = async () => {
    var objIsEmpty = errors && Object.keys(errors).length === 0 && Object.getPrototypeOf(errors) === Object.prototype

    if (objIsEmpty && isSubmitting) {
      await addNewComponent(inputsMain);
      setErrors({});
      setIsSumbitting(false)  
      dispatch({ type: ACTIONS.CLEAR });
    }
  }
  doProcess();   
  },[errors, isSubmitting])
 // useEffect(() => doProccess(), [])

  return { inputsMain, handleChangeInput, addSubComponent, submitTheForm, errors};
};

// A Reducer function assigned to sub-components inputs
const reducerThree = (inputsSub, action) => {
  switch (action.type) {
    case ACTIONS.INPUT_SET:
      return { ...inputsSub, [action.playload.name]: action.playload.value };
    case ACTIONS.TOTAL_EMISSION_PER_SUB_COM:
      return {
        ...inputsSub,
        totalCarbonEmission: inputsSub.subProductEmission * inputsSub.amount,
      };

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
    amount: 0,
    totalCarbonEmission: 0,
  });

  const handleChangeInput = (e) => {
    dispatch({
      type: ACTIONS.INPUT_SET,
      playload: { name: e.target.name, value: e.target.value },
    });
  };
  // This function counts  TOTAL_EMISSION_PER_COM
  const countTotalEmissions = () => {
    dispatch({
      type: ACTIONS.TOTAL_EMISSION_PER_SUB_COM,
    });
  };

  useEffect(() => {
    countTotalEmissions();
  }, [inputsSub.amount, inputsSub.subProductEmission]);
  return { inputsSub, handleChangeInput };
};

export { useFocuses, useInputsMain, useInputsSubs };
