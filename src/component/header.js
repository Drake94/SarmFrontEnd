import React from "react";
import { Container, Section } from "react-bulma-components";
import PropTypes from 'prop-types'

const Header = ({ tittle }) =>{
    return (
        <Section>
            <Container>
                <h1 className="title has-text-centered"> {tittle}</h1>
            </Container>
        </Section>
    )
}

Header.prototype = {
    tittle: PropTypes.string.isRequired
}
export default Header;

