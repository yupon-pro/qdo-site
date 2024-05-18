import AccessMap from "@/ui/Component/AccessMap";
import RegulationDialog from "@/ui/Component/Dialog/RegulationDialog";
import Form from "@/ui/Contact/Form";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact ",
  description:
    "For further inquiries, please feel free to contact us via Email. We will respond your questions as soon as possible.",
};

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
