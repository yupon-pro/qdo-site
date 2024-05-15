import AccessMap from "@/ui/Component/AccessMap";
import RegulationDialog from "@/ui/Component/Dialog/RegulationDialog";
import Form from "@/ui/Contact/Form";
import { Box, Container, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <Stack alignItems="center" spacing={5}>
      <Container maxWidth="md">
        <Form />
        <Box>
          <RegulationDialog />
        </Box>
      </Container>
      <AccessMap />
    </Stack>
  );
}
