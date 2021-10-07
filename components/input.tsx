import { TextField } from '@mui/material';

function Input(props) {
  const { placeholder = 'Board name', label = 'Name' } = props;

  return (
    <TextField
      label={label}
      placeholder={placeholder}
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
    />
  );
}

export default Input;
