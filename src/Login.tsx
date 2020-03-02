import React from 'react';
import GoogleLogin from 'react-google-login';

const Login = (props: any) => {
  const { onLoginGoogle } = props;
  return (
    <div>
      <GoogleLogin
        clientId='704341959795-elk2753ssmmobguas4gatbbthtsvvu42.apps.googleusercontent.com'
        render={(props: any) => (
          <div onClick={props.onClick}>asdasd</div>
        )}
        onSuccess={result => console.log(result)}
        onFailure={result => console.log(result)}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default Login