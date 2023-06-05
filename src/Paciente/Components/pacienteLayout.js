import React, { useState, useEffect } from 'react';
import { Modal, Container } from 'react-bulma-components';
import adminLayout from '../../HOC/adminLayout';
import AddButton from '../../component/button';
import Header from '../../component/header';
import ListPacient from './listPaciente';
import Form from './form';
import { createPacient } from '../services';
import Loading from '../../component/loading';
import { getPacient } from "../services";

const PacientLayout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const [pacients, setPacient] = useState([]);

    async function loadPacient () {
        const response = await getPacient();

        if (response.status === 200) {
            setPacient(response.data.paciente)
        }
        setIsLoading(false)
    }
    
    //retorna los médicos almacenados
    useEffect( () => {
        loadPacient()
    },[])

    const handleSubmit = async (data) => {
        await createPacient(data)
        loadPacient()
        setIsModalOpen(false)
    }
    return (
        <>
        <Container>
            <Header tittle="Pacientes" />
            {
                 isLoading && <Loading/>
            }

            {
                !isLoading && !pacients.length && (
                    <h2 className='title has-text-centered'>
                        No hay pacientes registrados
                    </h2>
                )
            }

            {
                !isLoading && pacients.length && <ListPacient pacients={ pacients }/>
            }

            <AddButton onClick={() =>setIsModalOpen(true)} />
            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Modal.Card>
                    <Modal.Card.Header>
                        Registrar un paciente
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
export default adminLayout(PacientLayout)