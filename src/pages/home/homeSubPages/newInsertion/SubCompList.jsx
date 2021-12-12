import React from "react";
import Button from "../../../../components/button/Button";
import { ListCompWrapper, ItemWrapper, Infos } from "./NewInsertionSC";

const SubCompList = ({ setFillingForm, subComponents }) => {
  return (
    <ListCompWrapper
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      {subComponents.map((value, index) => {
        if (index < 3) {
          return <ComopnentItem key={index} id={index + 1} itemData={value} />;
        } else return null;
      })}
      {subComponents.length > 3 && (
        <ItemWrapper>
          <h5 style={{ color: "white", fontWeight: 400 }}>View more</h5>
        </ItemWrapper>
      )}
      <Button
        textGiven="Add sub-component"
        functionGiven={() => setFillingForm()}
        buttonSize="btn--small"
      />
    </ListCompWrapper>
  );
};

const ComopnentItem = ({ id, itemData }) => {
  return (
    <ItemWrapper>
      <Infos>
        <h6>Identifer: {itemData.subIdentifier}</h6>
        <h6>C02 emissions: {itemData.subProductEmission}</h6>
        <h6>Amount : {itemData.amount}</h6>
      </Infos>
      <div className="inner--wrapper">
        <h5>{id}</h5>
        <h5 className="product--name">{itemData.subProductName}</h5>
      </div>
    </ItemWrapper>
  );
};
export default SubCompList;
