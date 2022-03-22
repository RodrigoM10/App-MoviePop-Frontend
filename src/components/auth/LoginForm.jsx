import React from 'react'
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { yupEmail, yupPassword } from '../../helpers/yupFormValidations';
import { useFormik } from 'formik';
import { API_ERROR, INCORRECT_DATA, LOGIN_SUCCESSFULL, UNKNOWN_ERROR } from '../../helpers/messagesText';
import { ErrorAlert, SuccessAlert } from '../alert/SweetAlert';
import { Container } from 'react-bootstrap';
import { Button, TextField } from '@mui/material';
import { getLogin } from '../../reducers/auth/actions';
import { postAuthLogin } from '../../services/authService';
import './authForm.css'
import { Link } from 'react-router-dom';
import LoginGoogle from './LoginGoogle';

export const LoginForm = () => {

    const dispatch = useDispatch();

    const validationSchema = yup.object({
        email: yupEmail(),
        password: yupPassword()
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const submitFunction = async () => {
                try {
                    const response = await postAuthLogin(values);
                    if (response?.data) {
                        const { token } = response.data;
                        const { user } = response.data;
                        dispatch(getLogin({
                            user: user,
                            token: token
                        }));
                        SuccessAlert(`Bienvenid@ ${user.name} `, LOGIN_SUCCESSFULL);
                    } else {
                        ErrorAlert(INCORRECT_DATA);
                    }
                } catch (error) {
                    ErrorAlert(UNKNOWN_ERROR, API_ERROR);
                }
            };
            submitFunction();
        },
    });

    return (
        <Container className="d-flex flex-column justify-content-center align-items-center">
            <form className="form-login d-flex flex-column justify-content-center align-items-center my-5 " onSubmit={formik.handleSubmit}>
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
                    Log In
                </Button>
            </form>
            <div className="">
                <Link to='/register' className='text-decoration-none text-white'>¿ Aun no estas registrado ?</Link>
            </div>
            <div className="my-3">
               <LoginGoogle/>
            </div>
        </Container>
    )
}
