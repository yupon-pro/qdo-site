"use client";

import { formAction } from "@/lib/Actions";
import { FormFields } from "@/lib/Definition";
import { Box, Button, CircularProgress, Stack, Typography } from "@mui/material";
import { useFormState, useFormStatus } from "react-dom";
import FormItems from "../Component/Form/Item";
import FormItemsError from "../Component/Form/ItemError";

export default function Form() {
  const formFields: FormFields[] = ["name", "email", "content"] as const;
  const initialState = { errors: undefined, message: undefined };
  const [state, dispatcher] = useFormState(formAction, initialState);

  return (
    <form action={dispatcher}>
      <Typography align="center" variant="h3" sx={{ paddingY: 4 }}>
        Contact Form
      </Typography>
      <Stack sx={{ paddingX: 5, paddingBottom: 4, backgroundColor: "rgba(240,240,240,0.8)" }} spacing={1}>
        <Box>
          {formFields.map((field) => (
            <Box key={field}>
              <FormItems inputType={field} />
              {state.errors && <FormItemsError errors={state.errors[`${field}`]} inputType={field} />}
            </Box>
          ))}
        </Box>
        <Box>
          {!!state.message && (
            <Typography variant="body1" color="error">
              {state.message}
            </Typography>
          )}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Submit error={(state.errors && !!Object.entries(state.errors).length) || !!state.message} />
        </Box>
      </Stack>
    </form>
  );
}

function Submit({ error }: { error: boolean }) {
  const { pending } = useFormStatus();

  return (
    <Button
      color={error ? "error" : "primary"}
      variant="contained"
      type="submit"
      disabled={pending}
      endIcon={pending ? <CircularProgress /> : undefined}
    >
      {error ? "Submit Again" : pending ? "Submitting..." : "Submit"}
    </Button>
  );
}
