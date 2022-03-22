import React from 'react'
import GoogleLogin from 'react-google-login';

const LoginGoogle = () => {

  const responseGoogle=(response) => {
    console.log(response)
  }
  return (
    <div>
      <GoogleLogin
        clientId="99232906142-dao01ahc4sql503tn2tat0uqecrpda7c.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default LoginGoogle;