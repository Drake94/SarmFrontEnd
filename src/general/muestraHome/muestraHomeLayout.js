import React, { useState, useEffect } from 'react';
import { Container } from 'react-bulma-components';
import Header from '../../component/header';
import TableHomeSamples from './tableHomeSample';
import Loading from '../../component/loading';
import { getMuestra } from "../../Muestra/services";

const SampleHomeLayout = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [samples, setSamples] = useState([]);
    
    async function loadSamples () {
        const response = await getMuestra();

        if (response.status === 200) {
            setSamples(response.data.muestra)
        }
        setIsLoading(false)
    }
    
    //retorna los médicos almacenados
    useEffect( () => {
        loadSamples()
    },[])

    return (
        <>
        <Container>
            <Header tittle="Muestras" />
            {
                 isLoading && <Loading/>
            }

            {
                !isLoading && !samples.length && (
                    <h2 className='title has-text-centered'>
                        No hay muestras registrados
                    </h2>
                )
            }

            {
                !isLoading && samples.length && <TableHomeSamples samples ={ samples }/>
            }
        </Container>
        </>
    )
}
export default SampleHomeLayout