import React, { useEffect, useState } from "react";
import {  Box, Table } from 'react-bulma-components';
import '../../assets/css/profile.css' 
import Pagination from '../../component/pagination';
import { getMuestra } from "../../Muestra/services/index"


const TableHomeSamples = () =>{
    const [samples, setSamples] = useState([]);
    const totalSamples = samples.length
    // eslint-disable-next-line no-unused-vars
    const [samplesForPage, setSamplesForPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)
    const lastIndex = currentPage * samplesForPage
    const firstIndex = lastIndex - samplesForPage

    async function loadSamples () {
        const response = await getMuestra();

        if (response.status === 200) {
            setSamples(response.data.muestra)
        }
    }

    useEffect( () => {
        loadSamples()
    },[])


    return(
        <div>
        <Box >
            <Table className="table">            
                <thead>
                    <tr>
                        <th className="abbr"><abbr >Rut del paciente</abbr></th>
                        <th className="abbr"><abbr >Fecha muestra</abbr></th>
                        <th className="abbr"><abbr >Estado</abbr></th>
                    </tr>
                </thead>                       
                <tbody className="tbody-1">
                    {samples.map(({ _id, rutPatient, createdAt, status}) => (
                            <tr className="tr-1" key={_id}>
                                <td>{rutPatient}</td>
                                <td>{createdAt}</td>
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
export default TableHomeSamples;