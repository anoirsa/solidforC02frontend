import React from "react";
import { BoxContainer, SubName, InfosSub } from "./BoxSubSC";
import { RemoveRedEye } from "@material-ui/icons";
// sData stands for sub components data

function BoxSub({ details, isSubComponent }) {
  const {
    subProductName,
    subProductEmission,
    amount,
    productName,
    identifer,
    subIdentifier,
    productEmission,
  } = details;
  const name = isSubComponent ? productName : subProductName;
  const id = isSubComponent ? identifer : subIdentifier;
  const emissionValue = isSubComponent ? productEmission : subProductEmission;
  return (
    <BoxContainer>
      <SubName>{name}</SubName>
      <InfosSub>
        <p>Identifier: {id}</p>
        <p>Emissions: {emissionValue} kt</p>
        {!isSubComponent && <p>Amount: {amount}</p>}
      </InfosSub>
    </BoxContainer>
  );
}

const SeeMore = () => {
  return (
    <BoxContainer>
      <RemoveRedEye className="icon--see" />
    </BoxContainer>
  );
};
export default BoxSub;
export { SeeMore };
