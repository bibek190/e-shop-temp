import React from "react";
import resetImg from "../../assets/forgot.avif";
import styles from "./auth.module.scss";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

function Reset() {
  return (
    <div>
      <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img
            src={resetImg}
            alt="Reset Password"
            width={"400px"}
            className={styles.images}
          />
          <Card>
            <div className={styles.form}>
              <h2>Reset Password</h2>

              <form>
                <input type="text" placeholder="Email" required />
                <button className="--btn --btn-primary --btn-block">
                  Reset
                </button>
                <div className={styles.links}>
                  <p>
                    <Link to="/login">Login </Link>
                  </p>
                  <p>
                    <Link to="/register">Register </Link>
                  </p>
                </div>
              </form>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default Reset;
