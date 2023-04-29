import React from "react";
import styles from "./ProfileMain.module.css";
import Header from "../Header/Header";
import ProfileUpdate from "../ProfileUpdate/ProfileUpdate";
import ProfileDisplay from "../ProfileDisplay/ProfileDisplay";

const ProfileMain = () => {
  return (
    <div className={styles.Main}>
      <Header></Header>
      <div className={styles.UserProfile}>
        <ProfileUpdate></ProfileUpdate>
        <ProfileDisplay></ProfileDisplay>
      </div>
    </div>
  );
};

export default ProfileMain;
