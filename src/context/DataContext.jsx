import { addComponent } from "../solidapi/SolidRequests.jsx";
import createDataContext from "./CreateDataContext.jsx";

const ACTIONS = {
  INSERT_COMPONENT: "insertComponent",
  MODAL_EXIT: "modalExit",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INSERT_COMPONENT:
      return {
        ...state,
        showModal: true,
        containerId: 1,
        componentDetails: action.playload.value,
      };

    case ACTIONS.MODAL_EXIT:
      return { ...state, showModal: false };
    default:
      break;
  }
};

const addNewComponent = (dispatch) => {
  return async (component) => {
    await addComponent(component);
    dispatch({ type: ACTIONS.INSERT_COMPONENT, playload: { value: component } });
  };
};

const exitFromModal = (dispatch) => {
  return () => {
    dispatch({ type: ACTIONS.MODAL_EXIT });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addNewComponent, exitFromModal },
  { showModal: false, containerId: 1, componentDetails: null }
);
