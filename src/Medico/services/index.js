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