import React from "react";
import styles from "./ProfileUpdate.module.css";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@mui/icons-material/Person";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ProfileUpdateForm = () => {
  return (
    <form className={styles.ProfileUpdateForm}>
      <TextField
        label="First Name"
        size="small"
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Last Name"
        size="small"
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Display Name"
        size="small"
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountBoxIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Email"
        size="small"
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailOutlineIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Phone No(Work)"
        size="small"
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocalPhoneIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Location"
        size="small"
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocationOnIcon />
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

export default ProfileUpdateForm;
