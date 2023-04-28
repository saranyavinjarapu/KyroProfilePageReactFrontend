import React from "react";
import styles from "./ProfileMain.module.css";
import Header from "../Header/Header";
import ProfileUpdate from "../ProfileUpdate/ProfileUpdate";

const ProfileMain = () => {
  return (
    <div className={styles.Main}>
      <Header></Header>
      <div className={styles.UserProfile}>
        <ProfileUpdate></ProfileUpdate>
        <div>Profile Display</div>
      </div>
    </div>
  );
};

export default ProfileMain;
