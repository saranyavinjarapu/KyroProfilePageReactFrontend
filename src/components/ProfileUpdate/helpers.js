import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
const FormItem = ({ label, icon, name, register }) => {
  return (
    <TextField
      label={label}
      size="small"
      {...register}
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

export default FormItem;
