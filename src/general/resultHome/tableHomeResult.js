import React from "react";
import {  Box, Table } from 'react-bulma-components';
import '../../assets/css/profile.css'

const TableHomeResult = ({ results }) =>{


    return(
        <Box>
            <Table class="table">
                <thead>
                    <tr>
                        <th><abbr >Validado por:</abbr></th>
                        <th><abbr >Rut del paciente</abbr></th>
                        <th><abbr >Fecha Revisión</abbr></th>
                        <th><abbr >Estado</abbr></th>
                    </tr>
                </thead>
                <tbody className="tbody-1">
                    {results.map(({validation, rutPatient, createdAt, status}) => (
                            <tr className="tr-1">
                                <td>{validation}</td>
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
export default TableHomeResult;