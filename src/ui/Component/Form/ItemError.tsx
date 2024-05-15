import { FormFields } from "@/lib/Definition";
import { Box, Typography } from "@mui/material";

export default function FormItemsError({
  errors,
  inputType,
}: {
  errors: string | string[] | undefined;
  inputType: FormFields;
}) {
  return (
    <Box id={`${inputType}-error`} aria-live="polite" aria-atomic="true">
      {errors && Array.isArray(errors) ? (
        errors?.map((error, index) => (
          <Typography key={index} variant="body1" color="error">
            {error}
          </Typography>
        ))
      ) : (
        <Typography variant="body1" color="error">
          {errors}
        </Typography>
      )}
    </Box>
  );
}
