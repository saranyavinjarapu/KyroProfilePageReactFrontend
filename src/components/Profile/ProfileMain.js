import React from "react";
import styles from "./ProfileMain.module.css";
import Header from "../Header/Header";

const ProfileMain = () => {
  return (
    <div className={styles.Main}>
      <Header></Header>
      <h1>ProfileMain</h1>
    </div>
  );
};

export default ProfileMain;
