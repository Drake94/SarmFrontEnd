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
        const token = document.cookie.replace('token=', '')
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
                'x-access-token': token
            },
            data: data,
        })
        return response
    } catch(e) {
        console.log(e)
        return e
    }
}

export async function deleteResult (data) {
    const token = document.cookie.replace('token=', '')
    try {
        const response = await axios({
            url: `${baseUrl}/resultado/`+data,
            headers: { 
                'content-type': 'application/x-www-form-urlencoded',
                'x-access-token': token
            },
            method: 'DELETE'
        })
        return response
    } catch(e) {
        console.log(e)
    }
}