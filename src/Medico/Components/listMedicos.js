import React, { useEffect, useState } from "react";
import { Card, Columns, Content, Heading} from 'react-bulma-components';
import '../../assets/css/profile.css'
import { getMedics } from "../services";
import Pagination from '../../component/pagination';

const ListMedics = () =>{
    const [medics, setMedics] = useState([]);
    const totalSamples = medics.length
    const [samplesForPage, setSamplesForPage] = useState(4)
    const [currentPage, setCurrentPage] = useState(1)
    const lastIndex = currentPage * samplesForPage
    const firstIndex = lastIndex - samplesForPage

    async function loadMedics () {
        const response = await getMedics();
        if (response.status === 200) {
            setMedics(response.data.medicolab)
        }
    }
    
    //retorna los médicos almacenados
    useEffect( () => {
        loadMedics()
    },[])

    return(
        <div >
        <Columns>
        {
            medics.map(({cargo, correo, nombre, rut, _id, imgUrl}) => (
            <Columns.Column size={3} key={_id}>
                <Card >
                    <Card.Image size="4by3" src={imgUrl} />
                    <Card.Content>
                        <Content>
                            <Heading subtitle size={ 3 }> { nombre }</Heading>
                            <Heading subtitle size={ 5 }> Rut: { rut }</Heading>
                            <Heading subtitle size={ 5 }> { correo }</Heading>
                            <Heading subtitle size={ 5 }> { cargo }</Heading>
                        </Content>
                    </Card.Content>
                </Card> 
            </Columns.Column>
        )).slice( firstIndex, lastIndex)}
        </Columns>
        <Pagination samplesForPage={samplesForPage}
             currentPage={currentPage} 
             setCurrentPage={setCurrentPage}
             totalSamples={totalSamples}
             />
        </div>
    )
}
export default ListMedics;