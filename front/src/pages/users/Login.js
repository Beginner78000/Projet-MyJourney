import React, { useEffect, useState, useContext } from "react";
import Auth from "../../contexts/Auth";
import { login } from "../../services/AuthApi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./login.scss";

const Login = () => {
  let navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
  const [message, setMessage] = useState("");

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const emailValidation = (email) => {
    const regEx = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+/;
    if (regEx.test(email)) {
      setMessage("Email is valid");
    } else if (!regEx.test(email)) {
      // setMessage("Email or Password is invalid");
      // au loggin a debuger
    } else {
      setMessage("");
    }
  };
  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;

    setUser({ ...user, [name]: value });
  };
  console.log(message);
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await login(user);
      setIsAuthenticated(response);
      console.log(response);
    } catch ({ response }) {
      console.log(response);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/account");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <div className='body--login'>
        <MainContainer>
          <WelcomeText>Bienvenue</WelcomeText>
          <form className='inputContainer'>
            <input
              type='text'
              name='email'
              className='styledInput'
              id='email'
              placeholder='Email'
              onChange={handleChange}
            />
            <input
              type='password'
              name='password'
              className='styledInput'
              id='password'
              placeholder='Password'
              onChange={handleChange}
            />
          </form>
          <form onSubmit={handleSubmit} className='styledButtonSubmit'>
            <button
              type='submit'
              onClick={emailValidation}
              className='styledButtonSubmit'
            >
              SIGN UP
            </button>
          </form>
          <div className='buttonContainer'></div>
          <div className='navigateRegister'></div>
          <p>Pas encore inscrit ?</p>
          <button
            type='submit'
            onClick={() => navigate("/register")}
            className='styledInput'
          >
            Register
          </button>
        </MainContainer>
      </div>
    </>
  );
};

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2.5rem;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 50vh;
    letter-spacing: 0.2rem;
    h4 {
      font-size: small;
    }
    .styledInput {
      margin-top: 0.5rem;
    }
    form.styledButtonSubmit{
      margin-top: 2rem;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 50vw;
    height: 70vh;
    .styledInput {
      margin-bottom: 0.5rem;
    }
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 60vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;


// const ForgotPassword = styled.h4`
//   cursor: pointer;
// `;

export default Login;
