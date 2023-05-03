import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { createContext } from "react";
import { useFormContext } from "react-hook-form";
export const FormItem = ({ label, name, icon, changeHandler }) => {
  const { register } = useFormContext();
  return (
    <TextField
      label={label}
      size="small"
      {...register(name)}
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
