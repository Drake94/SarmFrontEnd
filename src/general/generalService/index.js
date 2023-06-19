import axios from 'axios';
const baseUrl = process.env.REACT_APP_BASE_URL
const token = document.cookie.replace('token=', '')

export async function getSampleType () {
    try {
        const response = await axios({
            url: `${baseUrl}/tipomuestra`,
            method: 'GET'
        })
        return response
    } catch(e) {
        console.log(e)
    }
}

export async function createSampleType (sampleTypeData) {
    try {
        const data = new URLSearchParams()

        data.append('name', sampleTypeData.name)

        const response = await axios({
            url: `${baseUrl}/tipomuestra`,
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
    }
}

export async function getStatus () {
    try {
        const response = await axios({
            url: `${baseUrl}/status`,
            method: 'GET'
        })
        return response
    } catch(e) {
        console.log(e)
    }
}

export async function createStatus (status) {
    try {
        const data = new URLSearchParams()

        data.append('name', status.name)

        const response = await axios({
            url: `${baseUrl}/status`,
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
    }
}