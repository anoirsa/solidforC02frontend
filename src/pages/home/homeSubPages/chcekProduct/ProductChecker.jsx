import React, {useState} from 'react'
import Button from '../../../../components/button/Button';
import { Container, 
    Wrapper, InputWrapper,
    ButtonSection} from './ProductCheckerSC'

const ProductChecker = ({setService}) => {
    const [focused, setOnFocused] = useState(false);
    return (
        <Container
        initial = {{opacity :0 , x: -100}}
        animate = {{opacity : 1, x:0, transition:{duration : 1}}}
        >
            <Wrapper>
                <h2>Solid for CO2</h2>
                <p>Insert the product identifier below</p>
                <InputWrapper
                    focused={focused}
                >
                    
                    <input type="text" 
                        onFocus = {() => setOnFocused(true)}
                        onBlur = {() => setOnFocused(false)}
                        placeholder = "Identifier"
                    />
                </InputWrapper>
                <ButtonSection>
                <Button  textGiven="Back"  functionGiven={setService}/>
                <Button  textGiven="Check" />

                </ButtonSection>
                

            </Wrapper>
            
        </Container>
    )
}

export default ProductChecker
