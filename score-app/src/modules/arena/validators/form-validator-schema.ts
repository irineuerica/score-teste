import * as yup from 'yup';

export const formValidatorSchema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  whatsapp: yup.string().required('Campo obrigatório'),
  zipCode: yup.string().required('Campo obrigatório'),
  peopleCount: yup.array().of(yup.string().required()).min(3).required('Campos obrigatório'),
  ticketAverages: yup.array().of(yup.string().required()).defined().min(3).required('Campos obrigatório'),
});
