import React from "react";
import styles from "./ProfileDisplay.module.css";
import ProfilePicture from "../../assets/user_icon.png";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const ProfileDisplay = () => {
  return (
    <div className={styles.ProfileDisplay}>
      <div className={styles.ProfileDisplayContainer}>
        <img alt="user-profile-picture" src={ProfilePicture} />
        <div className={styles.CameraIcon}>
          <CameraAltIcon></CameraAltIcon>
        </div>
        <p>Adam Levine</p>
        <p>adamlevine@kyro.us</p>
      </div>
    </div>
  );
};

export default ProfileDisplay;
