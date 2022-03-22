import React from 'react'
import { useDispatch } from 'react-redux';
import { ErrorAlert, SuccessAlert } from '../alert/SweetAlert';
import { INCORRECT_DATA, LOGIN_SUCCESSFULL, UNKNOWN_ERROR, API_ERROR } from '../../helpers/messagesText';
import { getLogin } from '../../reducers/auth/actions';
import GoogleLogin from 'react-google-login';

const LoginGoogle = () => {
  const dispatch = useDispatch();

  const responseGoogle = (response) => {

    if (response) {
      const { accessToken } = response;
      const { profileObj } = response;
      dispatch(getLogin({
        user: profileObj,
        token: accessToken,
      }));
      SuccessAlert(`Bienvenid@ ${profileObj?.name} `, LOGIN_SUCCESSFULL);
    } else {
      ErrorAlert(INCORRECT_DATA);
    }
  }
  const responseFailGoogle =() =>{
    ErrorAlert(UNKNOWN_ERROR, API_ERROR);
  }
  return (
    <div>
      <GoogleLogin
        clientId="99232906142-dao01ahc4sql503tn2tat0uqecrpda7c.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseFailGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default LoginGoogle;