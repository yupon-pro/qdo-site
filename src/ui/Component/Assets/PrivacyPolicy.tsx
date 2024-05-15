import { Box, Container, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";

export default function PrivacyPolicy() {
  return (
    <Container>
      <Stack spacing={4}>
        <Box>
          <Typography variant="h4">Privacy Policy</Typography>
          <Typography variant="body1">
            This Privacy Policy explains how our website collects and uses information. By using our site, you agree to
            this Privacy Policy.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5">Information Collection</Typography>
          <Typography variant="body1">
            We may collect personal information such as name and email address when you fill out our contact form. We
            may also collect information about your use of the website using cookies or similar technologies.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5">Use of Information</Typography>
          <Typography variant="body1">The information collected may be used for the following purposes:</Typography>
          <List>
            <ListItem>
              <ListItemText>To respond to inquiries and provide support.</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>To improve services or develop new ones.</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>To analyze and improve the usage of the website.</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>To comply with legal requirements or requests from law enforcement.</ListItemText>
            </ListItem>
          </List>
        </Box>
        <Box>
          <Typography variant="h5">Information Sharing</Typography>
          <Typography variant="body1">
            We do not share collected information with third parties except as required by law.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5">Security</Typography>
          <Typography variant="body1">
            We take appropriate measures to protect the security of information, but we cannot guarantee complete
            security for data transmitted or stored online.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5">Cookies</Typography>
          <Typography variant="body1">
            We may use cookies or similar technologies such as the google analytics to track how users interact with the
            website. Users can limit the use of cookies through browser settings, but this may limit some features of
            the site.
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
}
