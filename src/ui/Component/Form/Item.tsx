import { FormFields } from "@/lib/Definition";
import {
  Box,
  FormControlLabel,
  Grid,
  Input,
  InputLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

export default function FormItems({ inputType }: { inputType: FormFields }) {
  let title;
  switch (inputType) {
    case "name":
      title = "name";
      break;
    case "email":
      title = "Mail Address";
      break;
    case "content":
      title = "Content";
      break;
    default:
      title = "Form";
  }

  return (
    <Box sx={{ marginY: 4 }}>
      <InputLabel htmlFor={inputType}>
        <Typography color="primary" variant="h6">
          {title}
        </Typography>
      </InputLabel>
      <TextField
        fullWidth
        multiline={inputType === "content"}
        rows={inputType === "content" ? 10 : 1}
        id={inputType}
        name={inputType}
        variant="filled"
        type={inputType === "email" ? "email" : "text"}
        aria-describedby={`${inputType}-error`}
        inputProps={inputType === "content" ? { maxLength: 2000, minLength: 5 } : undefined}
        required
      />
    </Box>
  );
}
