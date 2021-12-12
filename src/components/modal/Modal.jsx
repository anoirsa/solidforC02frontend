import React from "react";
import {
  ContainerModal,
  ContainerValue,
  SuccessfulEntry,
  FailedEntry,
} from "./ModalSC";
import { Close } from "@material-ui/icons";
import { DETAILS_INPUT, MODAL_OPTIONS_TEXT } from "../../globals/GlobalRd";
import BoxSub, { SeeMore } from "./subModalComp/BoxSub";

const Modal = ({
  setShowModal,
  componentDetails,
  containerId,
  searchPurpose,
}) => {
  return (
    <ContainerModal>
      <ContainerValue>
        <Close className="close--icon" onClick={() => setShowModal(false)} />
        <InsideModal
          containerId={containerId}
          componentDetails={componentDetails}
          searchPurpose={searchPurpose}
        />
      </ContainerValue>
    </ContainerModal>
  );
};

const InsideModal = ({ containerId, componentDetails, searchPurpose }) => {
  const {
    searchHeader,
    insertHeader,
    searchText,
    insertText,
    insertErrorHeader,
    insertErrorText,
    searchErrorHeader,
    searchErrorText,
    searchErrorPos,
    errorAdvice,
    partOf,
    subComponentsAre,
    insertErrorPos,
  } = MODAL_OPTIONS_TEXT;
  let header, textBelow, relatedCmps, errorPos;
  switch (containerId) {
    case 1:
      header = searchPurpose ? searchHeader : insertHeader;
      textBelow = searchPurpose ? searchText : insertText;
      const { isSubComponent, subComponents, isPartOf } = componentDetails;
      relatedCmps = isSubComponent ? isPartOf : subComponents;
      return (
        <SuccessfulEntry>
          <h5 className="header--input">{header}</h5>
          <p className="text--input">{textBelow}</p>
          <div className="main--details-class">
            {DETAILS_INPUT(!isSubComponent).map((value, index) => {
              return (
                <p key={index}>
                  <span className="field--detail">{value.label} </span>
                  <span className="info--detail">
                    {componentDetails[value.valueName]}
                  </span>
                </p>
              );
            })}
          </div>
          <p className="text--input">
            {" "}
            {isSubComponent ? partOf : subComponentsAre}
          </p>
          <div className="boxes--container">
            {relatedCmps.map((value, index) => {
              return (
                <BoxSub
                  details={value}
                  isSubComponent={isSubComponent}
                  key={index}
                />
              );
            })}

            {relatedCmps.length > 3 && <SeeMore />}
          </div>
        </SuccessfulEntry>
      );
    case 2:
      // Temp situation , Pos stands for possibilites
      header = searchPurpose ? searchErrorHeader : insertErrorHeader;
      textBelow = searchPurpose ? searchErrorText : insertErrorText;
      errorPos = searchPurpose ? searchErrorPos : insertErrorPos;
      return (
        <FailedEntry>
          <h5 className="header--input">{header}</h5>
          <p className="text--input">{textBelow}</p>
          <div className="list--errors--container">
            <p className="container--error--text">
              This could be because one of the reasons:
            </p>
            <ul className="list--errors--wrapper">
              {errorPos.map((value, index) => {
                return <li key={index}>{value}</li>;
              })}
            </ul>
            <p className="error--advice">{errorAdvice}</p>
          </div>
        </FailedEntry>
      );

    default:
      break;
  }
};

export default Modal;
