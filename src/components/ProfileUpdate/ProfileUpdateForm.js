import React from "react";
import styles from "./ProfileUpdate.module.css";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@mui/icons-material/Person";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";

const FormItem = ({ label, icon }) => {
  return (
    <TextField
      label={label}
      size="small"
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{icon}</InputAdornment>
        ),
      }}
    />
  );
};

const ProfileUpdateForm = () => {
  return (
    <form className={styles.ProfileUpdateForm}>
      <div className={styles.ProfileUpdateFormBody}>
        <FormItem label="First Name" icon={<PersonIcon />} />
        <FormItem label="Last Name" icon={<PersonIcon />} />
        <FormItem label="Display Name" icon={<AccountBoxIcon />} />
        <FormItem label="Email" icon={<MailOutlineIcon />} />
        <FormItem label="Phone No(Work)" icon={<LocalPhoneIcon />} />
        <FormItem label="Phone No(Personal)" icon={<LocalPhoneIcon />} />
        <FormItem label="Location" icon={<LocationOnIcon />} />
      </div>
      <div className={styles.ProfileUpdateFormFooter}>
        <Button variant="contained" size="small" color="error">
          Save Changes
        </Button>
      </div>
    </form>
  );
};

export default ProfileUpdateForm;
