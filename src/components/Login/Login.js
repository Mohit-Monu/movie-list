import { useRef, useState } from "react";
import styles from "./Login.module.css";
import { NavLink } from "react-router-dom";
const Login = () => {
  const [error, setError] = useState("");
  const nameRef = useRef();
  const passwordRef = useRef();
  function LoginHandler(e) {
    setError("");

    e.preventDefault();
    const userdetails = localStorage.getItem(nameRef.current.value);
    if (userdetails) {
      const userdetail = JSON.parse(userdetails);
      if (userdetail.password === passwordRef.current.value) {
        setError("");
        window.location.href = "/home";
      } else {
        setError("Wrong Password");
      }
    } else {
      setError("Invalid Credentials");
    }
  }
  return (
    <div className={styles["container"]}>
      <form onSubmit={LoginHandler}>
        <div className={styles["login-box"]}>
          <div className={styles["login-header"]}>
            <header>Sign In</header>
          </div>
          <div className={styles["input-box"]}>
            <input
              type="text"
              className={styles["input-field"]}
              placeholder="Name"
              autoComplete="off"
              required
              ref={nameRef}
            />
          </div>
          <div className={styles["input-box"]}>
            <input
              type="password"
              className={styles["input-field"]}
              placeholder="Password"
              autoComplete="off"
              required
              ref={passwordRef}
            />
          </div>
          <div className={styles["input-submit"]}>
            <button
              type="submit"
              id="submit-btn"
              className={`${styles["submit-btn"]}`}
            ></button>
            <label htmlFor="submit-btn">Sign In</label>
          </div>
          <header className="text-danger">{error}</header>
          <div className={styles["sign-up-link"]}>
            <NavLink to="/signup">
              <p>Don't have account? Sign Up</p>
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Login;
