import React, { useState } from "react";
import styles from "./auth.module.scss";
import registerImg from "../../assets/register.jpeg";
import Card from "../../components/card/Card";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

import "react-toastify/dist/ReactToastify.css";

import Loader from "../../components/loader/Loader";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      toast.error("Password do not match!");
    }
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user", user);
        setIsLoading(false);
        toast.success("Succesful registration..");
        navigate("/login");

        // ...
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      {isLoading && <Loader />}
      <div>
        <section className={`container ${styles.auth}`}>
          <div className={styles.img}>
            <Card>
              <div className={styles.form}>
                <h2>Register</h2>

                <form onSubmit={registerUser}>
                  <input
                    type="text"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    value={cpassword}
                    onChange={(e) => setCPassword(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="--btn --btn-primary --btn-block"
                  >
                    Sign In
                  </button>
                  <div className={styles.links}>
                    <Link to="/reset">Reset Password</Link>
                  </div>
                  <p>-- or --</p>
                  <button className="--btn --btn-danger --btn-block">
                    <FaGoogle color="#fff" /> Log-in With Google
                  </button>
                  <span className={styles.register}>
                    <p>Already have an account?</p>
                    <Link to="/login">Login</Link>
                  </span>
                </form>
              </div>
            </Card>
            <img
              src={registerImg}
              alt="Register"
              width={"400px"}
              className={styles.images}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Register;
