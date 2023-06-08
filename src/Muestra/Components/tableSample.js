import React from "react";
import {  Box, Table } from 'react-bulma-components';
import '../../assets/css/profile.css'
import { FaArrowDown, FaPen, FaTrash } from "react-icons/fa"

const TableSamples = ({ samples }) =>{


    return(
        <Box className="boxTable">
            <Table class="table">
                <thead>
                    <tr>
                        <th><abbr title="Tipo de muestra">Tipo de muestra</abbr></th>
                        <th><abbr title="Descripción">Descripción</abbr></th>
                        <th><abbr title="Rut Paciente">Rut del paciente</abbr></th>
                        <th><abbr title="Fecha muestra">Fecha muestra</abbr></th>
                        <th><abbr title="Estado">Estado</abbr></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="tbody-1">
                    {samples.map(({sampleType, description, rutPatient, createdAt, status}) => (
                            <tr className="tr-1">
                                <td>{sampleType}</td>
                                <td>{description}</td>
                                <td>{rutPatient}</td>
                                <td>{createdAt}</td>
                                <td>{status}</td>
                                <td>
                                    <div className="dropdown table-action-dropdown">
                                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="false"><FaArrowDown /></button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                                            <li>
                                                <button className="btn btn-outline-black " aria-hidden="true" ><FaPen />&nbsp;Editar</button>
                                            </li>
                                            <div className="dropdown-divider"></div>
                                            <li>
                                                <button className="btn btn-outline-light  text-danger" aria-hidden="true"><FaTrash />&nbsp;Eliminar</button>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        )
                    )
                    }    
                </tbody>
            
            </Table>
        </Box>
    )
}
export default TableSamples;