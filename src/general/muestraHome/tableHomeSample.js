import React from "react";
import {  Box, Table } from 'react-bulma-components';
import '../../assets/css/profile.css'

const TableHomeSamples = ({ samples }) =>{


    return(
        <Box>
            <Table class="table">
                <thead>
                    <tr>
                        <th><abbr title="Rut Paciente">Rut del paciente</abbr></th>
                        <th><abbr title="Fecha muestra">Fecha muestra</abbr></th>
                        <th><abbr title="Fecha muestra">Estado</abbr></th>
                    </tr>
                </thead>
                <tbody className="tbody-1">
                    {samples.map(({ rutPatient, createdAt, status}) => (
                            <tr className="tr-1">
                                <td>{rutPatient}</td>
                                <td>{createdAt}</td>
                                <td>{status}</td>
                            </tr>
                        )
                    )
                    }    
                </tbody>
            
            </Table>
        </Box>
    )
}
export default TableHomeSamples;