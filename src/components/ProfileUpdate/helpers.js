import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
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

export default FormItem;
