import React from "react";
import { Container, Section, Button } from 'react-bulma-components';

const addButton = ({ onClick }) =>{
    return(
        <Section className="buttonCreate">
            <Container >
                <div className="is-pulled-right" >
                    <Button onClick={onClick} color="link">Agregar</Button>
                </div>
            </Container>
        </Section>
    )
}

export default addButton;