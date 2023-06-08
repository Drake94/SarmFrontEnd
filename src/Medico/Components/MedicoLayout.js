import React, { useState, useEffect } from 'react';
import { Modal, Container } from 'react-bulma-components';
import adminLayout from '../../HOC/adminLayout';
import AddButton from '../../component/button';
import Header from '../../component/header';
import ListMedics from './listMedicos';
import Form from './form';
import { createMedic } from '../services';
import Loading from '../../component/loading';
import { getMedics } from "../services";
import swal from 'sweetalert2'

const MedicoLayout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const [medics, setMedics] = useState([]);


    async function loadMedics () {
        const response = await getMedics();
        if (response.status === 200) {
            setMedics(response.data.medicolab)
        }
        setIsLoading(false)
    }
    
    //retorna los médicos almacenados
    useEffect( () => {
        loadMedics()
    },[])

    const handleSubmit = async (data) => {
        const response = await createMedic(data)
        if (response.status === 201) {
            swal.fire({
                icon: 'success',
                title: 'Registrado',
                text: 'Médico '+ data.nombre +' a sido registrado con exito',
                confirmButtonText: 'Aceptar'
                });
        }
        loadMedics()
        setIsModalOpen(false)
        
    }
    return (
        <>
        <Container>
            <Header tittle="Médicos" />
            {
                 isLoading && <Loading/>
            }

            {
                !isLoading && !medics.length && (
                    <h2 className='title has-text-centered'>
                        No hay médicos registrados
                    </h2>
                )
            }

            {
                !isLoading && medics.length && <ListMedics medics={ medics }/>
            }

            <AddButton onClick={() =>setIsModalOpen(true)} />
            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Modal.Card>
                    <Modal.Card.Header>
                        Registrar un médico
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
export default adminLayout(MedicoLayout)