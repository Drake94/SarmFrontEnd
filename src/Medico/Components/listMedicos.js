import React from "react";
import { Card, Columns, Content, Heading} from 'react-bulma-components';
import '../../assets/css/profile.css'

const ListMedics = ({ medics }) =>{


    return(
        <div className="containerLayout">
        <Columns>
        {
            medics.map(({cargo, correo, nombre, rut, _id, imgUrl}) => (
            <Columns.Column size={4} key={_id}>
                <Card>
                    <Card.Image size="5by4" src={imgUrl} />
                    <Card.Content>
                        <Content>
                            <Heading> { nombre }</Heading>
                            <Heading subtitle size={ 5 }> Rut: { rut }</Heading>
                            <Heading subtitle size={ 5 }> { correo }</Heading>
                            <Heading subtitle size={ 5 }> { cargo }</Heading>
                        </Content>
                    </Card.Content>
                </Card> 
            </Columns.Column>
        ))
        }
        </Columns>
        </div>
    )
}
export default ListMedics;