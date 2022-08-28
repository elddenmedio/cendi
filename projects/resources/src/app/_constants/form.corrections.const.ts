import { FormTemplateInterface } from "dynamic-form";

const form_corrections_template: FormTemplateInterface[] = [
    {
        type: 'text',
        formControl: 'cct',
        placeholder: '',
        class: 'col-12 sm:col-1 md:col-1 lg:col-1 xl:col-1',
        validators: [{ validator: 'required', value: true }, { validator: 'minLength', value: 3 }] // , { validator: 'custom', value: /^\S+@\S+\.\S+$/, message: 'Favor de introducir el Name' }
    },
    {
        type: 'select',
        placeholder: '-CENDI-',
        formControl: 'campus',
        class: 'col-12 sm:col-2 md:col-2 lg:col-2 xl:col-2',
        options: [{ name: "Amalia Solorzano de Cárdenas", code: 'amalia' }],
        default: 'amalia'
    },
    {
        type: 'text',
        formControl: 'name',
        placeholder: '',
        class: 'col-12 sm:col-3 md:col-3 lg:col-3 xl:col-3',
        validators: [{ validator: 'required', value: true }, { validator: 'minLength', value: 3 }] // , { validator: 'custom', value: /^\S+@\S+\.\S+$/, message: 'Favor de introducir el Name' }
    },
    {
        type: 'select',
        placeholder: '-Movimiento-',
        formControl: 'movement',
        class: 'col-12 sm:col-2 md:col-2 lg:col-2 xl:col-2',
        options: [{ name: "BAJA", code: 'baja' }, { name: "ALTA", code: 'alta' }, { name: "CAMBIO CURP O NOMBRE", code: 'cambio' }],
        default: 'baja'
    },
    {
        type: 'text',
        formControl: 'says',
        placeholder: '',
        class: 'col-12 sm:col-2 md:col-2 lg:col-2 xl:col-2',
        validators: [{ validator: 'required', value: true }, { validator: 'minLength', value: 3 }] // , { validator: 'custom', value: /^\S+@\S+\.\S+$/, message: 'Favor de introducir el Name' }
    },
    {
        type: 'text',
        formControl: 'mustSay',
        placeholder: '',
        class: 'col-12 sm:col-2 md:col-2 lg:col-2 xl:col-2',
        validators: [{ validator: 'required', value: true }, { validator: 'minLength', value: 3 }] // , { validator: 'custom', value: /^\S+@\S+\.\S+$/, message: 'Favor de introducir el Name' }
    },
    // {
    //     type: "mask",
    //     placeholder: "SSN",
    //     formControl: 'ssn',
    //     mask: '999-99-9999',
    //     label: '',
    //     validators: [{ validator: 'required', value: true }]
    // },

]

export default form_corrections_template;