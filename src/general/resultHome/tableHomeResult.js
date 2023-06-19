import React, { useEffect, useState } from "react";
import {  Box, Table } from 'react-bulma-components';
import '../../assets/css/profile.css'
import Pagination from '../../component/pagination';
import { getResult } from "../../Resultado/services"

const TableHomeResult = ({ results }) =>{
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

    return(
        <div>
        <Box >
            <Table className="table">
                
                <thead>
                    <tr>
                        <th className="abbr"><abbr >Rut del paciente</abbr></th>
                        <th className="abbr"><abbr >Validado por:</abbr></th>
                        <th className="abbr"><abbr >Estado</abbr></th>
                    </tr>
                </thead>
                
                
                <tbody className="tbody-1">
                    {results.map(({validation, rutPatient, createdAt, status, _id}) => (
                            <tr className="tr-1" key={_id}>
                                <td>{rutPatient}</td>
                                <td>{validation}</td>                                
                                <td>{status}</td>
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
export default TableHomeResult;