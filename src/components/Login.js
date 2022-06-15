import React, { useContext } from 'react';
import './Login.css';
import Button from '@mui/material/Button';
import Logo from '../imgs/Facebook-logo.png';
import Context from './Context';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
const provider = new GoogleAuthProvider();
const Login = () => {
  const ctx = useContext(Context);
  const signIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.

        // The signed-in user info.
        const user = result.user;
        // console.log(user);
        ctx.setUser(user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.

        const errorMessage = error.message;
        // The email of the user's account used.

        // The AuthCredential type that was used.

        // ...
        alert(errorMessage);
      });
  };
  return (
    <div className="login">
      <div className="loginLogo">
        <img style={{ width: '220px' }} src={Logo} alt="log" />
        <img
          style={{ marginBottom: '200px' }}
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg"
          alt="Facebook"
        />
        <Button
          style={{ backgroundColor: '#1877F2' }}
          variant="contained"
          onClick={signIn}
        >
          SignIn
        </Button>
      </div>
    </div>
  );
};

export default Login;
