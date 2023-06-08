import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL

export async function getMedics () {
    try {
        const response = await axios({
            url: `${baseUrl}/medicolab`,
            method: 'GET'
        })
        return response
    } catch(e) {
        console.log(e)
    }
}

export async function createMedic (medicData) {
    try {
        const formData = new FormData()

        formData.append('nombre', medicData.nombre)
        formData.append('cargo', medicData.cargo)
        formData.append('correo', medicData.correo)
        formData.append('clave', medicData.clave)
        formData.append('rut', medicData.rut)
        formData.append('image', medicData.image)

        const response = await axios({
            url: `${baseUrl}/medicolab`,
            method: 'POST',
            data: formData,
        })
        return response
        
    } catch(e) {
        console.log(e)
    }
}

export async function loginMedic (medicData) {
    try {
        const data = new URLSearchParams()
        data.append('correo', medicData.correo)
        data.append('clave', medicData.clave)
        
        const response = await axios({
            url: `${baseUrl}/medicoLabLogIn`,
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: data,           
        })
        if (response.status === 200)
            document.cookie = `token = ${response.data.token}`

            return response;
            

    } catch(err) {
        console.log(err)
        
    }
}