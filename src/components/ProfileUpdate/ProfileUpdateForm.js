import React, { useContext } from "react";
import styles from "./ProfileUpdate.module.css";
import { FormItem, ProfileContext } from "./helpers";
import PersonIcon from "@mui/icons-material/Person";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";

const ProfileUpdateForm = () => {
  const { register, handleSubmit } = useForm();
  const { userData, setUserData } = useContext(ProfileContext);
  const handleSaveUserProfile = (formValues) => {
    console.log("formValues", formValues);
  };
  const onFormInputChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };
  return (
    <form
      className={styles.ProfileUpdateForm}
      onSubmit={handleSubmit(handleSaveUserProfile)}
    >
      <div className={styles.ProfileUpdateFormBody}>
        <FormItem
          label="First Name"
          name="firstName"
          register={register("firstName")}
          icon={<PersonIcon />}
          changeHandler={onFormInputChange}
        />
        <FormItem
          label="Last Name"
          register={register("lastName")}
          icon={<PersonIcon />}
          changeHandler={onFormInputChange}
        />
        <FormItem
          label="Display Name"
          register={register("displayName")}
          icon={<AccountBoxIcon />}
        />
        <FormItem
          label="Email"
          register={register("email")}
          icon={<MailOutlineIcon />}
          changeHandler={onFormInputChange}
        />
        <FormItem
          label="Phone No(Work)"
          register={register("workPhone")}
          icon={<LocalPhoneIcon />}
        />
        <FormItem
          label="Phone No(Personal)"
          register={register("personalPhone")}
          icon={<LocalPhoneIcon />}
        />
        <FormItem
          label="Location"
          register={register("location")}
          icon={<LocationOnIcon />}
        />
      </div>
      <div className={styles.ProfileUpdateFormFooter}>
        <Button type="submit" variant="contained" size="small" color="error">
          Save Changes
        </Button>
      </div>
    </form>
  );
};

export default ProfileUpdateForm;
