import React, {useState, useRef} from "react";
import { Form as BulmaForm, Button } from 'react-bulma-components';
import swal from 'sweetalert2'
const { Field, Control, Label, Input } = BulmaForm

const Form = ({ handleSubmit }) => {
    const[formValues, setFormValues] = useState({
        nombre:'',
        cargo:'',
        correo:'',
        clave:'',
        rut:'',
    })

    const inputFileRef = useRef()

    const handleChange = (event) =>{
        const { name, value} = event.target
        setFormValues({...formValues, [name]:value})
    }

    const _handleSubmit = (e) => {
        e.preventDefault()
        if((formValues.nombre).trim <= 0  || formValues.nombre.length <= 2 || formValues.nombre.length > 25    ){
            swal.fire({
                icon: 'info',
                title: 'Error',
                text: 'Nombre no puede quedar vacío, no puede ser menor de dos caracteres o mayor de ',
                confirmButtonText: 'Aceptar'
                }); 
        }else if(formValues.cargo === ''){
            swal.fire({
                icon: 'info',
                title: 'Campos requeridos',
                text: 'Cargo no puede quedar vacío',
                confirmButtonText: 'Aceptar'
                });  
        }else if(formValues.correo === ''){
            swal.fire({
                icon: 'info',
                title: 'Campos requeridos',
                text: 'Correo no puede quedar vacío',
                confirmButtonText: 'Aceptar'
                });  
        }else if(formValues.clave === ''){
            swal.fire({
                icon: 'info',
                title: 'Campos requeridos',
                text: 'Clave no puede quedar vacío',
                confirmButtonText: 'Aceptar'
                });  
        }else if(formValues.rut === ''){
            swal.fire({
                icon: 'info',
                title: 'Campos requeridos',
                text: 'Rut no puede quedar vacío',
                confirmButtonText: 'Aceptar'
                });  
        }else if( inputFileRef.current === '' ){
            swal.fire({
                icon: 'info',
                title: 'Campos requeridos',
                text: 'Debe seleccionar una imagen',
                confirmButtonText: 'Aceptar'
                });  
        }else{
        handleSubmit({...formValues, image: inputFileRef.current.files[0] })
        
        }
    }
    return (
        <form onSubmit={_handleSubmit}>
        <Field>
            <Label>Nombre</Label>
            <Control>
                <Input
                 placeholder="Ej. Mars"
                 name="nombre"
                 required='true'
                 value={formValues.nombre}
                 onChange={handleChange}
                />
            </Control>
        </Field>
        <Field>
            <Label>Cargo</Label>
            <Control>
                <Input
                 placeholder="Ej. Tens"
                 name="cargo"
                 required='true'
                 value={formValues.cargo}
                 onChange={handleChange}
                />
            </Control>
        </Field>
        <Field>
            <Label>Email</Label>
            <Control>
                <Input
                 placeholder="EJ. ACL@acl.cl"
                 name="correo"
                 type="email"
                 required='true'
                 value={formValues.correo}
                 onChange={handleChange}
                />
            </Control>
        </Field>
        <Field>
            <Label>Clave</Label>
            <Control>
                <Input
                 placeholder="Clave"
                 name="clave"
                 type="password"
                 required='true'
                 value={formValues.clave}
                 onChange={handleChange}
                />
            </Control>
        </Field>
        <Field>
            <Label>Rut</Label>
            <Control>
                <Input
                 placeholder="11111111-5"
                 name="rut"
                 required='true'
                 value={formValues.rut}
                 onChange={handleChange}
                />
            </Control>
        </Field>

        <Field>
            <Label>Imagen</Label>
            <Control>
                <input type="file" ref={inputFileRef} required='true'/>
            </Control>
        </Field>
        <Button type= "submit" color="primary">
            Registrar
        </Button>
        </form>
    )
}

export default Form;