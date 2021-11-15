import React from 'react'
import { ContainerModal, ContainerValue} from './ModalSC';
import {  Close } from "@material-ui/icons";





const Modal = ({setShowModal}) => { 
    return ( 
        <ContainerModal>
            <Close className="close--icon" onClick = {() => setShowModal(false)}/>
            <InsideModal containerId={1} />
        

            
            
        </ContainerModal>
    ) 
}

const InsideModal = ({containerId}) => {
    switch (containerId) {
        case 1:
            return (
            <ContainerValue>

            </ContainerValue> )
    
        default:
            break;
    }
   
}

export default Modal
