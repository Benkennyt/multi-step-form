import * as yup from 'yup';

const nameRules = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/
const phoneRules = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


export const basicSchema = yup.object().shape({
    name: yup.string()
    .required('This field is required')
    .matches(nameRules, 'Please enter a valid name')
    .max(40),

    email: yup.string()
    .required('This field is required')
    .email('Please enter a valid email')
    ,

    phone: yup.string()
    .required("This field is required")
    .matches( phoneRules, 'Phone number is not valid')
    .min(10, "too short")
    .max(10, "too long"),
});