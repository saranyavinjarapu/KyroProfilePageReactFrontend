import React, { useContext } from "react";
import styles from "./ProfileUpdate.module.css";
import { FormItem, ProfileContext } from "./helpers";
import PersonIcon from "@mui/icons-material/Person";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

const ProfileUpdateForm = () => {
  const methods = useForm();
  const { userData, setUserData } = useContext(ProfileContext);
  const handleSaveUserProfile = (formValues) => {
    console.log("formValues", formValues);
  };
  const onFormInputChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };
  return (
    <FormProvider {...methods}>
      <form
        className={styles.ProfileUpdateForm}
        onSubmit={methods.handleSubmit(handleSaveUserProfile)}
      >
        <div className={styles.ProfileUpdateFormBody}>
          <FormItem
            label="First Name"
            name="firstName"
            icon={<PersonIcon />}
            changeHandler={onFormInputChange}
          />
          <FormItem
            label="Last Name"
            name="lastName"
            icon={<PersonIcon />}
            changeHandler={onFormInputChange}
          />
          <FormItem
            label="Display Name"
            name="displayName"
            icon={<AccountBoxIcon />}
          />
          <FormItem
            label="Email"
            name="email"
            icon={<MailOutlineIcon />}
            changeHandler={onFormInputChange}
          />
          <FormItem
            label="Phone No(Work)"
            name="workPhone"
            icon={<LocalPhoneIcon />}
          />
          <FormItem
            label="Phone No(Personal)"
            name="personalPhone"
            icon={<LocalPhoneIcon />}
          />
          <FormItem
            label="Location"
            name="location"
            icon={<LocationOnIcon />}
          />
        </div>
        <div className={styles.ProfileUpdateFormFooter}>
          <Button type="submit" variant="contained" size="small" color="error">
            Save Changes
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default ProfileUpdateForm;
