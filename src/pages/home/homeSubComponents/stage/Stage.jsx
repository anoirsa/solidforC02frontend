import React, { useState, useContext } from "react";
import Modal from "../../../../components/modal/Modal";
import { Context } from "../../../../context/DataContext";
import ProductChecker from "../../homeSubPages/chcekProduct/ProductChecker";
import Introduction from "../../homeSubPages/inroduction/Introduction";
import NewInsertion from "../../homeSubPages/newInsertion/NewInsertion";
import { Container, Wrapper } from "./StageSC";

const Stage = () => {
  const [service, setService] = useState(1);
  const {
    searchPurpose,
    containerId,
    componentDetails,
    showModal,
    exitFromModal,
  } = useContext(Context);
  return (
    <Container>
      <Wrapper>
        <SliderData service={service} setService={setService} />

        {showModal && (
          <Modal
            setShowModal={exitFromModal}
            containerId={containerId}
            componentDetails={componentDetails}
            searchPurpose={searchPurpose}
          />
        )}
      </Wrapper>
    </Container>
  );
};

const SliderData = ({ service, setService }) => {
  switch (service) {
    case 1:
      return <Introduction setService={setService} />;
    case 2:
      return <ProductChecker setService={() => setService(1)} />;
    case 3:
      return <NewInsertion setService={() => setService(1)} />;
    default:
      return null;
  }
};

export default Stage;
