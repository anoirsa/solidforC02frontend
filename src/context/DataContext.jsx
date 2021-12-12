import { addComponent, getComponent } from "../solidapi/SolidRequests.jsx";
import createDataContext from "./CreateDataContext.jsx";

const ACTIONS = {
  DISPLAY_COMPONENT: "insertComponent",
  CHECK_COMPONENT: "checkComponent",
  MODAL_EXIT: "modalExit",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.DISPLAY_COMPONENT:
      const error = action.playload.error;
      return {
        ...state,
        showModal: true,
        containerId: !error ? 1 : 2,
        componentDetails: action.playload.value,
        searchPurpose: action.playload.search,
        error: error,
      };

    case ACTIONS.MODAL_EXIT:
      return { ...state, showModal: false };
    default:
      break;
  }
};

const addNewComponent = (dispatch) => {
  return async (component) => {
    const { success } = await addComponent(component);
    dispatch({
      type: ACTIONS.DISPLAY_COMPONENT,
      playload: { value: component, search: false, error: !success },
    });
  };
};

const getReadComponent = (dispatch) => {
  return async (identifier) => {
    const { componentValue, success } = await getComponent(identifier);
    dispatch({
      type: ACTIONS.DISPLAY_COMPONENT,
      playload: { value: componentValue, search: true, error: !success },
    });
  };
};

const exitFromModal = (dispatch) => {
  return () => {
    dispatch({ type: ACTIONS.MODAL_EXIT });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addNewComponent, getReadComponent, exitFromModal },
  {
    showModal: false,
    containerId: 1,
    componentDetails: null,
    searchPurpose: false,
    error: false,
  }
);

// Temp situation converting showModal to true and continerId to 2;
