import { useNavigate } from "react-router-dom";
// import "./app.css";
// import Auth from "../../contexts/Auth";
import { register } from "../../../src/services/AuthApi";
import FormInput from "./FormInput";
import Login from "./Login";
import React, { useState } from "react";
import styled from "styled-components";
import "./register.scss";

const Register = () => {
  let navigate = useNavigate();
  // const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
  const [success, setSuccess] = useState(false);
  const [values, setValues] = useState({
    username: "",
    email: "",
    // lastname: "",
    // firstname: "",
    password: "",
    passwordConfirm: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      // errorMessage:
      //   "Le nom d'utilisateur doit comporter entre 3 et 16 caractères et ne doit pas inclure de caractères spéciaux !",
      // label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    // {
    //   id: 2,
    //   name: "lastname",
    //   type: "text",
    //   placeholder: "Nom",
    //   // errorMessage: "Il doit s'agir d'un nom valide !",
    //   // label: "Nom",
    //   required: true,
    // },
    // {
    //   id: 3,
    //   name: "firstname",
    //   type: "text",
    //   placeholder: "Prénom",
    //   // errorMessage: "Il doit s'agir d'un prénom valide !",
    //   // label: "Prénom",
    //   required: true,
    // },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "Email",
      // errorMessage: "Il doit s'agir d'une adresse e-mail valide !",
      // label: "Email",
      required: true,
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      // errorMessage:
      //   "Le mot de passe doit être composé de 6 à 20 caractères et inclure au moins 1 lettre, 1 chiffre et 1 caractère spécial !",
      // label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 6,
      name: "passwordConfirm",
      type: "password",
      placeholder: "Confirm password",
      // errorMessage: "Les mots de passe ne correspondent pas !",
      // label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await register(values);
      console.log(response);
      setSuccess(true);
      setValues("");
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      {success ? (
        <Login />
      ) : (
        <div className='body--register'>
          <MainContainer>
            <WelcomeText>Bienvenue</WelcomeText>
            <form className='formRegister'>
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
            </form>
            <form onSubmit={handleSubmit} className='styledButtonSubmit'>
              <button
                type='submit'
                onClick={() => "emailValidation"}
                className='styledButtonRegister'
              >
                Submit
              </button>
            </form>
            {/* <div className='buttonContainer'>Test</div> */}

            {/* <LoginWith>OR LOGIN WITH</LoginWith> */}
            <HorizontalRule />
            
            <div className='navigateRegister'></div>
            <p>Déjà membre ?</p>
            <br></br>
            <button
              type='submit'
              onClick={() => navigate("/login")}
              className='styledInput'
            >
             Sign In
            </button>
          </MainContainer>
        </div>
      )}
    </>
  );
};

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
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
    height: 80vh;
    h4 {
      font-size: small;
    }
    margin-top: 4rem;
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
    height: 75vh;
    h2 {
      margin-top: 1.5rem;
      // padding-bottom: 0.5rem;
    }
    
    form.styledButtonSubmit {
      margin: 1rem;
    }
    p {
      margin-top: 0;
    }
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

// const LoginWith = styled.h5`
//   cursor: pointer;
// `;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

// const IconsContainer = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   margin: 2rem 0 3rem 0;
//   width: 80%;
// `;
export default Register;
