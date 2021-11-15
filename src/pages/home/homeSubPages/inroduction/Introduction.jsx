import React from 'react'
import Button from '../../../../components/button/Button'

import 
{ Wrapper,Container, QuestionSection, ButtonSection }
 from './IntroductionSC'



const Introduction = ({setService}) => {
    return (
        <Container
            initial = {{opacity :0, x: -100}}
            animate = {{opacity : 1,x:0 ,transition:{duration : 1}}}
        >
        <Wrapper>
            <h2>Welcome to SOLID FOR C02</h2>
            <h4>For better and clean envirement industry</h4>
            <QuestionSection>
                <h5>- Your company have produced any kind of raw material components ?</h5>
                <h5>- Why you don't store all CO2 emissions invloved in your products ?</h5>

            </QuestionSection>
            <p>Insert the C02 emissions of your product to be shared with all partner companies and contribute for a cleaner enviroment</p>
            <ButtonSection>
                <Button  textGiven="New Insertion" functionGiven={() => setService(3)} /> 
                <Button  textGiven="Check a product emissions"  functionGiven={() => setService(2)}/>
            </ButtonSection>       
            
        </Wrapper>
        </Container>
    )
}

export default Introduction
