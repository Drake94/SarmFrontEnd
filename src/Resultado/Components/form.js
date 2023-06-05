import React, {useState} from "react";
import { Form as BulmaForm, Button } from 'react-bulma-components';

const { Field, Control, Label, Input } = BulmaForm

const Form = ({ handleSubmit }) => {
    const[formValues, setFormValues] = useState({
        result:'',
        sampleType:'',
        validation:'',
        rutPatient:'',
        status:'',
    })


    const handleChange = (event) =>{
        const { name, value} = event.target
        setFormValues({...formValues, [name]:value})
    }

    const _handleSubmit = (e) => {
        e.preventDefault()
        handleSubmit({...formValues})
    }
    return (
        <form onSubmit={_handleSubmit}>
        <Field>
            <Label>Resultado</Label>
            <Control>
                <Input
                 class="textarea"
                 placeholder="Describir resultado"
                 name="result"
                 value={formValues.result}
                 onChange={handleChange}
                />
            </Control>
        </Field>
        <Field>
            <Label>Tipo de muestra</Label>
            <Control>
                <Input
                 placeholder="Ej. Orina"
                 name="sampleType"
                 value={formValues.sampleType}
                 onChange={handleChange}
                />
            </Control>
        </Field>
        <Field>
            <Label>validation</Label>
            <Control>
                <Input
                 placeholder="EJ. Validado por el Dr."
                 name="validation"
                 type="text"
                 value={formValues.validation}
                 onChange={handleChange}
                />
            </Control>
        </Field>
        <Field>
            <Label>Rut Paciente</Label>
            <Control>
                <Input
                 placeholder="11111111-5"
                 name="rutPatient"
                 value={formValues.rutPatient}
                 onChange={handleChange}
                />
            </Control>
        </Field>
        <Field>
            <Label>Estado</Label>
            <Control>
                <Input
                 placeholder="Ej: Realizado"
                 name="status"
                 value={formValues.status}
                 onChange={handleChange}
                />
            </Control>
        </Field>
        <Button type= "submit" color="primary">
            Registrar
        </Button>
        </form>
    )
}

export default Form;