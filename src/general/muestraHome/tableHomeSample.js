import React from "react";
import {  Box, Table } from 'react-bulma-components';
import '../../assets/css/profile.css'

const TableHomeSamples = ({ samples }) =>{


    return(
        <Box>
            <Table class="table">
                <thead>
                    <tr>
                        <th><abbr >Rut del paciente</abbr></th>
                        <th><abbr >Fecha muestra</abbr></th>
                        <th><abbr >Estado</abbr></th>
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