import React from "react";
import styles from "./Loader.module.scss";
import ReactDOM from "react-dom";

const Loader = () => {
  return ReactDOM.createPortal(
    <div>
      <div className={styles["lds-facebook"]}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export default Loader;
