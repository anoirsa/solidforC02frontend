import React from 'react'
import { ContainerModal, ContainerValue, SuccessfulEntry} from './ModalSC';
import {  Close } from "@material-ui/icons";
import { DETAILS_INPUT } from '../../globals/GlobalRd';
import BoxSub, { SeeMore } from './subModalComp/BoxSub';




const subProductExampleI = {
    subProductName: "Mouse",
    subIdentifier: "5343-4343",
    subProductEmission: 200,
    amount: 2,
    totalCarbonEmission: 400
}
const subProductExampleII = {
    subProductName: "Keyboard",
    subIdentifier: "5343-122",
    subProductEmission: 200,
    amount: 2,
    totalCarbonEmission: 400
}

// For dev purposes
const productExample = {
    productName: "Macbook Apple 120",
    countryOrigin: "Finland",
    identifer: "3900-2122-9999-1222",
    productEmission: 2122,
    subComponents: [subProductExampleI, subProductExampleII]
}


//

const Modal = ({setShowModal}) => { 
    return ( 
        <ContainerModal>
            
            <ContainerValue>
            <Close className="close--icon" onClick = {() => setShowModal(false)}/>
            <InsideModal containerId={1} />
            </ContainerValue>
           </ContainerModal>
    ) 
}

const InsideModal = ({containerId, componentDetails}) => {
    switch (containerId) {
        case 1:
            return (
            <SuccessfulEntry>
                <h5 className="header--input">Data enetred Succesfully !</h5>
                <p className="text--input"> You have entered successfully new component details with the following information:</p>
                <div className="main--details-class">
                   {DETAILS_INPUT.map((value, index) => {
                       return (
                        <p><span className="field--detail">{value.label} </span> 
                        <span className="info--detail">{productExample[value.valueName]}</span></p>
                       )
                   })}
                </div>
                <p className="text--input"> Sub components are:</p>
                <div className="boxes--container">
                    {/** 
                    {componentDetails.subComponents.map((value, index) => {
                        return(
                            <BoxSub sData={value}  key={index}/>
                        )
                    })}  */}
                    {/** <BoxSub />
                    <BoxSub />
                    <BoxSub /> **/}
                    {/**  
                    {componentDetails.subComponents.length > 3 &&  <SeeMore /> } */}

                </div>
            </SuccessfulEntry> )
    
        default:
            break;
    }
   
}

export default Modal
/**
   <p><span className="field--detail">Main component name: </span> 
                    <span className="info--detail">{productExample.productName}</span></p>
 */