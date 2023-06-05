import React, { useState, useEffect } from 'react';
import { Container } from 'react-bulma-components';
import Header from '../../component/header';
import TableHomeResult from './tableHomeResult';
import Loading from '../../component/loading';
import { getResult } from "../../Resultado/services";

const ResultHomeLayout = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [results, setResults] = useState([]);
    
    async function loadResult () {
        const response = await getResult();

        if (response.status === 200) {
            setResults(response.data.resultado)
        }
        setIsLoading(false)
    }
    
    //retorna los médicos almacenados
    useEffect( () => {
        loadResult()
    },[])

    return (
        <>
        <Container>
            <Header tittle="Resultados" />
            {
                 isLoading && <Loading/>
            }

            {
                !isLoading && !results.length && (
                    <h2 className='title has-text-centered'>
                        No hay resultados registrados
                    </h2>
                )
            }
            {
                !isLoading && results.length && <TableHomeResult results={ results }/>
            }

        </Container>
        </>
    )
}
export default ResultHomeLayout