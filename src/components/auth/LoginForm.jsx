import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';
import { ErrorAlert, SuccessLoginAlert } from '../alert/SweetAlert';
import { yupEmail, yupPassword } from '../../helpers/yupFormValidations';
import { API_ERROR, INCORRECT_DATA, LOGIN_SUCCESSFULL, UNKNOWN_ERROR } from '../../helpers/messagesText';
import { postAuthLogin } from '../../services/authService';
import { getLogin } from '../../reducers/auth/actions';
import LoginGoogle from './LoginGoogle';
import './authForm.css'

export const LoginForm = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
                        SuccessLoginAlert(`Bienvenid@ ${user.name} `, LOGIN_SUCCESSFULL, navigate );
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
                <LoginGoogle />
            </div>
        </Container>
    )
}
