import axios from 'axios';
const baseUrl = process.env.REACT_APP_BASE_URL

export async function getResult () {
    try {
        const response = await axios({
            url: `${baseUrl}/resultado`,
            method: 'GET'
        })
        return response
    } catch(e) {
        console.log(e)
    }
}

export async function createResult (pacientData) {
    try {
        const data = new URLSearchParams()

        data.append('result', pacientData.result)
        data.append('sampleType', pacientData.sampleType)
        data.append('validation', pacientData.validation)
        data.append('rutPatient', pacientData.rutPatient)
        data.append('status', pacientData.status)
        
        const response = await axios({
            url: `${baseUrl}/resultado`,
            method: 'POST',
            headers: { 
                'content-type': 'application/x-www-form-urlencoded',
                'x-access-token': document.cookie
         },
            data: data,
        })
        return response
    } catch(e) {
        console.log(e)
    }
}

export async function deleteResult (data) {
    try {
        const response = await axios({
            url: `${baseUrl}/resultado/`+data,
            headers: {'x-access-token': document.cookie},
            method: 'DELETE'
        })
        return response
    } catch(e) {
        console.log(e)
    }
}