import React from 'react'
import { useDispatch } from 'react-redux';
import { ErrorAlert, SuccessLoginAlert } from '../alert/SweetAlert';
import { INCORRECT_DATA, LOGIN_SUCCESSFULL, UNKNOWN_ERROR, API_ERROR } from '../../helpers/messagesText';
import { getLogin } from '../../reducers/auth/actions';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';

const clientId = process.env.REACT_APP_CLIENT_GOOGLE_ID;

const LoginGoogle = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSuccess = (response) => {
    if (response) {
      const { accessToken } = response;
      const { profileObj } = response;
      dispatch(getLogin({
        user: profileObj,
        token: accessToken,
      }));
      SuccessLoginAlert(`Bienvenid@ ${profileObj?.name} `, LOGIN_SUCCESSFULL, navigate);
    } else {
      ErrorAlert(INCORRECT_DATA);
    }
  }
  const onFailure = () => {
    try{
      ErrorAlert(UNKNOWN_ERROR, API_ERROR);
    } catch{
      ErrorAlert(UNKNOWN_ERROR, API_ERROR);
    }
  }

  return (
    <div id="singInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default LoginGoogle;