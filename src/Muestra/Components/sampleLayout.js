import React, { useState, useEffect } from 'react';
import { Modal, Container } from 'react-bulma-components';
import adminLayout from '../../HOC/adminLayout';
import AddButton from '../../component/button';
import Header from '../../component/header';
import TableSamples from './tableSample';
import Form from './form';
import { createMuestra } from '../services';
import Loading from '../../component/loading';
import { getMuestra } from "../services";

const SampleLayout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
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

    const handleSubmit = async (data) => {
        await createMuestra(data)
        loadSamples()
        setIsModalOpen(false)
    }
    return (
        <>
        <Container>
            <Header tittle="Muestras registradas" />
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
                !isLoading && samples.length && <TableSamples samples ={ samples }/>
            }

            <AddButton onClick={() =>setIsModalOpen(true)} />
            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Modal.Card>
                    <Modal.Card.Header>
                        Registrar Muestra
                    </Modal.Card.Header>
                    <Modal.Card.Body>
                        <Form handleSubmit={handleSubmit} />
                    </Modal.Card.Body>
                </Modal.Card>
            </Modal>
        </Container>
        </>
    )
}
export default adminLayout(SampleLayout)