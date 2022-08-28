import { FormTemplateInterface } from "dynamic-form";

const form_interview_kid_template: FormTemplateInterface[] = [
    {
        type: 'text',
        formControl: 'name',
        label: 'Nombre (s)',
        class: 'col-12',
        validators: [{ validator: 'required', value: true }, { validator: 'minLength', value: 3 }] // , { validator: 'custom', value: /^\S+@\S+\.\S+$/, message: 'Favor de introducir el Name' }
    },
    {
        type: 'text',
        formControl: 'last_name',
        label: 'Apellido',
        class: 'col-12 sm:col-6 md:col-6 lg:col-6 xl:col-6',
        validators: [{ validator: 'required', value: true }, { validator: 'minLength', value: 3 }] 
    },
    {
        type: 'text',
        formControl: 'second_last_name',
        label: 'Segundo Apellido',
        class: 'col-12 sm:col-6 md:col-6 lg:col-6 xl:col-6',
        validators: []
    },
    {
        type: 'date',
        formControl: 'born',
        label: 'Fecha de Nacimiento',
        class: 'col-12 sm:col-6 md:col-6 lg:col-6 xl:col-6',
        validators: [{ validator: 'required', value: true }] 
    },
    {
        type: 'select',
        placeholder: '-Grupo-',
        formControl: 'group',
        label: 'Grupo',
        class: 'col-12 sm:col-6 md:col-6 lg:col-6 xl:col-6',
        options: [{ name: "Lactantes", code: 'l' }, { name: "Maternal", code: 'm' }, { name: "Preescolar", code: 'p' }],
        default: 'l',
        validators: []
    },
    {
        type: 'textarea',
        formControl: 'medic_observation',
        label: 'Observaciones Médicas',
        class: 'col-12 sm:col-12 md:col-12 lg:col-12 xl:col-12',
        validators: [] 
    },
    {
        type: 'textarea',
        formControl: 'dental_observation',
        label: 'Observaciones Dentales',
        class: 'col-12 sm:col-12 md:col-12 lg:col-12 xl:col-12',
        validators: [] 
    },
    {
        type: 'textarea',
        formControl: 'psychology_observation',
        label: 'Observaciones Psicológicas',
        class: 'col-12 sm:col-12 md:col-12 lg:col-12 xl:col-12',
        validators: [] 
    },
    {
        type: 'textarea',
        formControl: 'pedagogy_observation',
        label: 'Observaciones de Pedagogía',
        class: 'col-12 sm:col-12 md:col-12 lg:col-12 xl:col-12',
        validators: [] 
    },
    {
        type: 'textarea',
        formControl: 'general_observation',
        label: 'Observaciones Generales',
        class: 'col-12 sm:col-12 md:col-12 lg:col-12 xl:col-12',
        validators: [] 
    }
]

export default form_interview_kid_template;