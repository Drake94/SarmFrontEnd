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
import swal from 'sweetalert2'

const PacientLayout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const [pacients, setPacient] = useState([]);

    async function loadPacient() {
        const response = await getPacient();

        if (response.status === 200) {
            setPacient(response.data.paciente)
        }
        setIsLoading(false)
    }

    //retorna los médicos almacenados
    useEffect(() => {
        loadPacient()
    }, [])

    const handleSubmit = async (data) => {
        const response = await createPacient(data)
        if (response.status === 201) {
            swal.fire({
                icon: 'success',
                title: 'Registrado',
                text: 'Paciente ' + data.nombrePaciente + ' a sido registrado con éxito',
                confirmButtonText: 'Aceptar',
                timer: '3000'
            });
        } else if (response.status !== 201) {
            swal.fire({
                icon: 'error',
                title: 'No registrado',
                text: 'Ha ocurrido un error ' + response.response.data,
                confirmButtonText: 'Aceptar'
            });
        }
        loadPacient()
        setIsModalOpen(false)
    }
    return (
            <Container>
                <AddButton onClick={() => setIsModalOpen(true)} />
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
                <Header tittle="Pacientes" />
                {
                    isLoading && <Loading />
                }

                {
                    !isLoading && !pacients.length && (
                        <h2 className='title has-text-centered'>
                            No hay pacientes registrados
                        </h2>
                    )
                }

                {
                    !isLoading && pacients.length && <ListPacient pacients={pacients} />
                }


            </Container>
    )
}
export default adminLayout(PacientLayout)