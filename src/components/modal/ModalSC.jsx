import styled from 'styled-components';
//import motion from "framer-motion"



const ContainerModal = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top:0;
    left: 0;
    margin:0;
    background: #110e0eb8;
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;

    .close--icon {
        position: absolute;
        right: 20px;
        top: 20px;
        font-size: 40px;
        color: #ffffff;

        &:hover {
            opacity: 0.5;
        }
    }

`;

const ContainerValue = styled.div`
    width: 50%;
    height: 50vh;
    background: #ffffff;
    border-radius: 3px;

`;


export {ContainerModal, ContainerValue}