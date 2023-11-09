import React, { useRef } from "react";
import styles from "../Login/Login.module.css";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const nameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const ProfessionRef = useRef();
  function SignUpHandler(e) {
    e.preventDefault();
    const formDetails = {
      name: nameRef.current.value,
      password: passwordRef.current.value,
      email: emailRef.current.value,
      phoneRef: passwordRef.current.value,
      profession: ProfessionRef.current.value,
    };
    localStorage.setItem(nameRef.current.value,JSON.stringify(formDetails))
    window.location.href = '/'
  }
  return (
    <div>
      <div className={styles["container"]}>
        <form onSubmit={SignUpHandler}>
          <div className={styles["login-box"]}>
            <div className={styles["login-header"]}>
              <header>Sign Up</header>
            </div>
            <div className={styles["input-box"]}>
              <input
                type="text"
                className={styles["input-field"]}
                placeholder="Name"
                autoComplete="off"
                ref={nameRef}
                required
              />
            </div>
            <div className={styles["input-box"]}>
              <input
                type="password"
                className={styles["input-field"]}
                placeholder="Password"
                autoComplete="off"
                ref={passwordRef}
                required
              />
            </div>
            <div className={styles["input-box"]}>
              <input
                type="email"
                className={styles["input-field"]}
                placeholder="Email"
                ref={emailRef}
                autoComplete="off"
                required
              />
            </div>
            <div className={styles["input-box"]}>
              <input
                type="number"
                className={styles["input-field"]}
                placeholder="Phone Number"
                autoComplete="off"
                ref={phoneRef}
                required
              />
            </div>
            <div className={styles["input-box"]}>
              <select
                className={styles["input-field"]}
                autoComplete="off"
                required
                ref={ProfessionRef}
              >
                <option value="">Profession</option>
                <option value="Developer">Developer</option>
                <option value="Artist">Artist</option>
                <option value="Teacher">Teacher</option>
                <option value="Doctor">Doctor</option>
                <option value="Engineer">Engineer</option>
              </select>
            </div>
            <div className={styles["input-submit"]}>
              <button
                type="submit"
                id="submit-btn"
                className={`${styles["submit-btn"]}`}
              ></button>
              <label htmlFor="submit-btn">Sign Up</label>
            </div>
            <div className={styles["sign-up-link"]}>
              <NavLink to="/">
                <p>Already have an account? Sign In</p>
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
