import React, {useState, useRef} from "react";
import { Form as BulmaForm, Button } from 'react-bulma-components';

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
        handleSubmit({...formValues, image: inputFileRef.current.files[0] })
    }
    return (
        <form onSubmit={_handleSubmit}>
        <Field>
            <Label>Nombre</Label>
            <Control>
                <Input
                 placeholder="Ej. Mars"
                 name="nombre"
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
                 value={formValues.rut}
                 onChange={handleChange}
                />
            </Control>
        </Field>

        <Field>
            <Label>Imagen</Label>
            <Control>
                <input type="file" ref={inputFileRef}/>
            </Control>
        </Field>
        <Button type= "submit" color="primary">
            Registrar
        </Button>
        </form>
    )
}

export default Form;