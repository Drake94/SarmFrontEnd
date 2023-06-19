import React, {useEffect, useState}from "react";
import {  Box, Table } from 'react-bulma-components';
import '../../assets/css/profile.css'
import { FaCog, FaPen, FaTrash } from "react-icons/fa"
import { deleteResult } from "../services";
import { Modal} from 'react-bulma-components';
import Pagination from '../../component/pagination';
import { getResult } from "../services";
import Form from './form';

const TableResult = ({ results }) =>{
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [result, setResults] = useState([]);
    const totalSamples = result.length
    const [samplesForPage, setSamplesForPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)
    const lastIndex = currentPage * samplesForPage
    const firstIndex = lastIndex - samplesForPage


    async function loadResult () {
        const response = await getResult();

        if (response.status === 200) {
            setResults(response.data.resultado)
        }
    }

    useEffect( () => {
        loadResult()
    },[])

    const handleSubmit = async (_id) => {
        await deleteResult(_id)
    }

    const _handleSubmit = async () => {
    
        //await createResult(data)
        setIsModalOpen(false)
    }



    return(
        <div>
        <Box >
            <Table class="table">
                <thead>
                    <tr>
                        <th className="abbr"><abbr title="Describa el resultado">Resultado</abbr></th>
                        <th className="abbr"><abbr title="Tipo de muestra">Tipo de muestra</abbr></th>
                        <th className="abbr"><abbr title="Descripción">Validado por:</abbr></th>
                        <th className="abbr"><abbr title="Rut Paciente">Rut del paciente</abbr></th>
                        <th className="abbr"><abbr title="Fecha última actualización ">Fecha Revisión</abbr></th>
                        <th className="abbr"><abbr title="Estado">Estado</abbr></th>
                        <th className="abbr">Opciones</th>
                    </tr>
                </thead>
                <tbody className="tbody-1">
                    {results.map(({result, sampleType, validation, rutPatient, updatedAt, status, _id}) => (
                            <tr className="tr-1" key={_id}>
                                <td>{result}</td>
                                <td>{sampleType}</td>
                                <td>{validation}</td>
                                <td>{rutPatient}</td>
                                <td>{updatedAt}</td>
                                <td >{status}</td>
                                <td className="centerTable">
                                    <div className="dropdown table-action-dropdown">
                                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="false"><FaCog /></button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                                            <li>
                                                <button className="btn btn-outline-black " aria-hidden="true" onClick={() =>setIsModalOpen(true)}><FaPen />&nbsp;Editar
                                                    <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
                                                        <Modal.Card>
                                                            <Modal.Card.Header>
                                                                Registrar Resultados
                                                            </Modal.Card.Header>
                                                            <Modal.Card.Body>
                                                                <Form _handleSubmit={_handleSubmit} />
                                                            </Modal.Card.Body>
                                                        </Modal.Card>
                                                    </Modal>
                                                </button>
                                            </li>
                                            <div className="dropdown-divider"></div>
                                            <li>
                                                <button className="btn btn-outline-light  text-danger" aria-hidden="true" onClick={()=>handleSubmit(_id)}><FaTrash />&nbsp;Eliminar</button>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        )).slice( firstIndex, lastIndex)}    
                </tbody>
            
            </Table>
        </Box>
        <Pagination samplesForPage={samplesForPage}
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        totalSamples={totalSamples}
        />
   </div>
    )
}
export default TableResult;