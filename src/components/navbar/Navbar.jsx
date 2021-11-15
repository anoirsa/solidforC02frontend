import React from 'react'
import { Container, Wrapper, ItemLink } from './NavbarSC'

const Navbar = () => {
    return (
        <Container>
            <Wrapper> 
                <ItemLink  to="#">
                <div className="inside--link">
                    <h3 className="item--text">
                        Home
                    </h3>
                    </div>
                </ItemLink>
                <ItemLink  to="#">
                <div className="inside--link">
                    <h3 className="item--text">
                        About us
                    </h3>
                    </div>
                </ItemLink>
                <ItemLink  to="#">
                    <div className="inside--link">
                    <h3 className="item--text">
                        Contact information
                    </h3>
                    </div>
                </ItemLink>
                
            </Wrapper>
                
        </Container>
    )
}

export default Navbar
