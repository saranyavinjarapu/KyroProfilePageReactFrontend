import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { createContext } from "react";
export const FormItem = ({ label, icon, register, changeHandler }) => {
  return (
    <TextField
      label={label}
      size="small"
      {...register}
      onChange={changeHandler}
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

export const ProfileContext = createContext(null);
