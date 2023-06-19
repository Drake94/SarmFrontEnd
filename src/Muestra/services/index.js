import axios from 'axios';
const baseUrl = process.env.REACT_APP_BASE_URL

export async function getMuestra () {
    try {
        const response = await axios({
            url: `${baseUrl}/muestra`,
            method: 'GET'
        })
        return response
    } catch(e) {
        console.log(e)
    }
}

export async function createMuestra (pacientData) {
    try {
        const data = new URLSearchParams()

        data.append('sampleType', pacientData.sampleType)
        data.append('description', pacientData.description)
        data.append('rutPatient', pacientData.rutPatient)
        data.append('status', pacientData.status)
        const token = document.cookie.replace('token=', '')
        const response = await axios({
            url: `${baseUrl}/muestra`,
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