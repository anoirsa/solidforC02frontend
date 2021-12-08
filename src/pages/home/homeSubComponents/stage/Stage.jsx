import React, {useState} from 'react'
import Modal from '../../../../components/modal/Modal'
import ProductChecker from '../../homeSubPages/chcekProduct/ProductChecker'
import Introduction from '../../homeSubPages/inroduction/Introduction'
import NewInsertion from '../../homeSubPages/newInsertion/NewInsertion'
import { Container, Wrapper } from './StageSC'

const Stage = () => {
    const [service, setService] = useState(1)
    const [showModal, setShowModal] = useState(true);
    return (
        <Container>
            <Wrapper>
                  <SliderData
                  service={service} 
                 setService={setService}/> 
                 
                 {showModal && 
                <Modal
                    setShowModal={setShowModal}
                />  }

            </Wrapper>
            
        </Container>
    )
}

const SliderData = ({service, setService}) => {

    switch (service) {
        case 1:
            return <Introduction setService={setService} /> 
        case 2:
            return <ProductChecker setService={() => setService(1)} />
        case 3:
            return <NewInsertion  setService={() => setService(1)}   />
        default:
            return null
    }

}

export default Stage
