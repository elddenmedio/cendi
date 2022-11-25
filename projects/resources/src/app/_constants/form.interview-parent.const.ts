import { FormTemplateInterface } from "dynamic-form";

const form_interview_parent_template: FormTemplateInterface[] = [
    {
        type: 'select',
        placeholder: '-Prefijo-',
        formControl: 'prefix',
        label: 'Prefijo*',
        class: 'col-12 sm:col-2 md:col-2 lg:col-2 xl:col-2',
        options: [{ name: "Sr.", code: 'sr' }, { name: "Sra.", code: 'sra' }, { name: "Srta.", code: 'srta' }, { name: "Otro", code: 'otro' }],
        default: '',
        validators: [{ validator: 'required', value: true }] 
    },
    {
        type: 'text',
        formControl: 'name',
        label: 'Nombre*',
        class: 'col-12 sm:col-10 md:col-10 lg:col-10 xl:col-10',
        validators: [{ validator: 'required', value: true }, { validator: 'minLength', value: 3 }] // , { validator: 'custom', value: /^\S+@\S+\.\S+$/, message: 'Favor de introducir el Name' }
    },
    {
        type: 'text',
        formControl: 'last_name',
        label: 'Apellido*',
        class: 'col-12 sm:col-6 md:col-6 lg:col-6 xl:col-6',
        validators: [{ validator: 'required', value: true }, { validator: 'minLength', value: 3 }] 
    },
    {
        type: 'text',
        formControl: 'second_last_name',
        label: 'Secundo Apellido',
        class: 'col-12 sm:col-6 md:col-6 lg:col-6 xl:col-6',
        validators: [{ validator: 'required', value: true }]
    },
    {
        type: "mask",
        formControl: 'phone_personal',
        mask: '99-9999-9999',
        label: 'Teléfono Personal',
        class: 'col-12 sm:col-6 md:col-6 lg:col-6 xl:col-6',
        validators: []
    },
    {
        type: 'mask',
        formControl: 'phone_work',
        mask: '99-9999-9999',
        label: 'Teléfono de Trabajo',
        class: 'col-12 sm:col-6 md:col-6 lg:col-6 xl:col-6',
        validators: [] 
    },
    {
        type: 'mask',
        formControl: 'phone_ext',
        mask: '9999',
        label: 'Extensión',
        class: 'col-12 sm:col-6 md:col-6 lg:col-6 xl:col-6',
        validators: [] 
    },
    {
        type: 'textarea',
        formControl: 'address',
        label: 'Dirección',
        class: 'col-12',
        style: 'width: 100%; height: 100px;',
        validators: [] 
    },
    {
        type: 'textarea',
        formControl: 'work',
        label: 'Trabajo',
        class: 'col-12',
        style: 'width: 100%; height: 100px;',
        validators: [] 
    },
    {
        type: 'textarea',
        formControl: 'observation',
        label: 'Observaciones',
        class: 'col-12',
        style: 'width: 100%; height: 100px;',
        validators: [] 
    }
]

export default form_interview_parent_template;