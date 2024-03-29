import React from "react";
import styles from "./styles.scss";
import SignupForm from "components/SignupForm";
import LoginForm from "components/LoginForm";

const Auth = (props, context) => (
  <main className={styles.auth}>
    <div className={styles.column}>
      <img src={require("images/phone.png")} alt="Checkout our app. Is cool" />
    </div>
    <div className={styles.column}>
      <div className={`${styles.whiteBox} ${styles.formBox}`}>
        {props.action === "login" && <LoginForm />}
        {props.action === "signup" && <SignupForm />}
      </div>

      <div className={styles.whiteBox}>
        {props.action === "login" && (
          <p className={styles.text}>
            Don't have an account?{" "}
            <span className={styles.changeLink} onClick={props.changeAction}>
              Sign up
            </span>
          </p>
        )}
        {props.action === "signup" && (
          <p className={styles.text}>
            Have an account?{" "}
            <span className={styles.changeLink} onClick={props.changeAction}>
              Log in
            </span>
          </p>
        )}
      </div>
      <div className={styles.appBox}>
        <span>Get the app</span>
        <div className={styles.appstores}>
          <img
            src={require("images/ios.png")}
            alt="Download it on the Apple Appstore"
          />
          <img
            src={require("images/android.png")}
            alt="Download it on the Apple Appstore"
          />
        </div>
      </div>
    </div>
  </main>
);

export default Auth;
