// import { useState } from "react";
import { getUsers } from "../../utils/localStorage";
import styles from "./register.module.css";
import {BsTwitter} from 'react-icons/bs'
import { useRecoilState, useRecoilValue } from "recoil";
import { Create } from "./create";
import { useNavigate } from "react-router-dom";
import { 
  nameState,
  emailState,
  dateState,
  mobileState,
  passwordState,
  nameErrorState,
  emailErrorState,
  mobileErrorState,
  passErrorState,
  registeredState, 
  createState} from "../../atoms/atoms";

export function Register() {
  const create = useRecoilValue(createState);
  const [registered, setRegistered] = useRecoilState(registeredState);
  const [name, setName] = useRecoilState(nameState);
  const [email, setEmail] = useRecoilState(emailState);
  const [date, setDate] = useRecoilState(dateState);
  const [mobile, setMobile] = useRecoilState(mobileState);
  const [password, setPassword] = useRecoilState(passwordState);
  const [nameError, setNameError] = useRecoilState(nameErrorState);
  const [emailError, setEmailError] = useRecoilState(emailErrorState);
  const [mobileError, setMobileError] = useRecoilState(mobileErrorState);
  const [passError, setPassError] = useRecoilState(passErrorState);

  const navigate = useNavigate();


  function validateUserName() {
    const regex = /^[a-zA-Z0-9_]{5,16}$/;

    if (!name) {
      setNameError("Name is required");
      return false;
    } else if (!regex.test(name)) {
      setNameError(
        "name should be 5 to 16 characters and should not include any special character"
      );
      return false;
    } else {
      setNameError("");
      return true;
    }
  }

  function validateUserEmail() {
    const regex = /^\S+@\S+\.\S+$/;

    if (!email) {
      setEmailError("email is required");
      return false;
    } else if (!regex.test(email)) {
      setEmailError("It should be a valid email address");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  }

  function validateMobile() {
    const regex = /^(?:\+?\d{1,3}[- ]?)?\d{10}$/;

    if (!mobile) {
      setMobileError("phone number should not be empty");
      return false;
    } else if (!regex.test(mobile)) {
      setMobileError("Please enter a valid phone number");
      return false;
    } else {
      setMobileError("");
      return true;
    }
  }

  function validatePassword() {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;

    if (!password) {
      setPassError("password is required");
      return false;
    } else if (!regex.test(password)) {
      setPassError(
        "password should be 8 to 20 characters and include at least 1 number, 1 letter and 1 special character"
      );
      return false;
    } else {
      setPassError("");
      return true;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const isUserNameValid = validateUserName();
    const isUserEmailValid = validateUserEmail();
    const isUserPasswordValid = validatePassword();
    const isMobileValid = validateMobile();

    if (
      isUserNameValid &&
      isUserEmailValid &&
      isMobileValid &&
      isUserPasswordValid
    ) {
      const users = getUsers();
      const check = users.some((user) => user.email === email);

      if (check) {
        setRegistered("user already registered");
      } else {
        users.push({
          id: Date.now(),
          name,
          email,
          mobile,
          date,
          password,
        });
        localStorage.setItem("users", JSON.stringify(users));
        // localStorage.setItem('isLogin', JSON.stringify(false))
        navigate('/login')
      }
      
    }
    setName("");
    setEmail("");
    setMobile("");
    setDate("");
    setPassword("");
  }

  return (
    <div className={styles.Regcontainer}>


    {/* <Create /> */}

    {
        create ? <Create /> : <div>

            <span className={styles.errReg}>{registered}</span>
      <div className={styles.formContainer}>
        <form className={styles.formReg} onSubmit={handleSubmit}>
          <BsTwitter style={{color:"white"}}/>
          <h2 className={styles.headReg}>Create your account</h2>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="name"
            className={styles.inputReg}
          />
          {<span className={styles.errMsg}>{nameError}</span>}

          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="email"
            className={styles.inputReg}
          />
          {<span className={styles.errMsg}>{emailError}</span>}

          <input
            type="number"
            onChange={(e) => setMobile(e.target.value)}
            value={mobile}
            placeholder="Phone"
            className={styles.inputReg}
          />
          {<span className={styles.errMsg}>{mobileError}</span>}

          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            placeholder="DOB"
            className={styles.inputReg}
          />
          {/* {<span className={styles.errMsg}>{nameError}</span>} */}

          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="password"
            className={styles.inputReg}
          />
          {<span className={styles.errMsg}>{passError}</span>}

          <button className={styles.btnReg} type="submit">
            Create
          </button>
        </form>
      </div>
        </div>
    }
    </div>
  );
}
