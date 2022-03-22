import React from 'react'
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { yupEmail, yupName, yupPassword } from '../../helpers/yupFormValidations';
import { useFormik } from 'formik';
import { API_ERROR, REGISTER_SUCCESSFULL, UNKNOWN_ERROR } from '../../helpers/messagesText';
import { ErrorAlert, SuccessAlert } from '../alert/SweetAlert';
import { Container } from 'react-bootstrap';
import { Button, TextField } from '@mui/material';
import { postAuthRegister } from '../../services/authService';
import './authForm.css'

export const RegisterForm = () => {
    const validationSchema = yup.object({
        name: yupName(),
        email: yupEmail(),
        password: yupPassword()
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const submitFunction = async () => {
                try {
                    await postAuthRegister(values);
                    SuccessAlert(`¡¡ Excelente !!`, REGISTER_SUCCESSFULL);
                    formik.resetForm();
                    setTimeout(1000)
                    window.location.href = '/login';
                } catch (error) {
                    ErrorAlert(UNKNOWN_ERROR, API_ERROR);
                }
            };
            submitFunction();
        },
    });

    return (
        <Container className="d-flex flex-column justify-content-center align-items-center">
            <form className="form-login d-flex flex-column justify-content-center align-items-center "
                autoComplete="off"
                onSubmit={formik.handleSubmit}
            >
                <TextField
                    className="form-input"
                    fullWidth
                    id="name"
                    name="name"
                    type="text"
                    label="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                    className="form-input"
                    fullWidth
                    id="email"
                    name="email"
                    type="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    className="form-input"
                    fullWidth
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <Button variant="contained" className="form-button" type="submit">
                    Register
                </Button>
            </form>
            <div className="">
                <Link to='/login' className='text-decoration-none text-white'>¿ Ya estas registrado ?</Link>
            </div>
            <div className="my-3">
                <Link to='' className='text-decoration-none text-white'>Ingesá con una cuenta Google</Link>
            </div>
        </Container>
    )
}
