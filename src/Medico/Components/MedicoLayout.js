import React, { useState, useEffect } from 'react';
import '../../assets/css/app.css'
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
                text: 'Médico '+ data.nombre +' a sido registrado con éxito',
                confirmButtonText: 'Aceptar',
                timer: '3000'
                });
        }else if(response.status !== 201){
            swal.fire({
                icon: 'error',
                title: 'No registrado',
                text: 'Ha ocurrido un error '+ response.response.data,
                confirmButtonText: 'Aceptar'
                });
        }

        loadMedics()
        setIsModalOpen(false)
        
    }
    return (
        <>
        <Container>
        <AddButton onClick={() =>setIsModalOpen(true)} />
            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Modal.Card>
                    <Modal.Card.Header className='delete'>
                        Registrar un médico
                    </Modal.Card.Header>
                    <Modal.Card.Body>
                        <Form handleSubmit={handleSubmit} />
                    </Modal.Card.Body>
                </Modal.Card>
            </Modal>
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

            
        </Container>
        </>
    )
}
export default adminLayout(MedicoLayout)