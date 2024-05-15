import BodyTypography from "@/ui/Component/CustomMui/BodyTypography";
import { Box, Container, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Container
        maxWidth={false}
        sx={{
          backgroundImage: "url('/thirdparty/itocampus.jpg')",
          backgroundSize: "100%",
          backgroundPosition: { xs: "top", sm: "50% 50%", md: "50% 75%" },
          backgroundRepeat: "no-repeat",
          backgroundColor: "transparent",
          opacity: "0.7",
          height: "70vh",
        }}
      />
      <Stack alignItems="center" spacing={5} sx={{ marginY: "2rem" }}>
        <Box>
          <Typography variant="h3"> Kyushu University</Typography>
        </Box>
        <Box sx={{ width: { xs: "75%", sm: "60%" } }}>
          <BodyTypography>
            Kyushu University, located in Fukuoka, Japan, is one of Japan{"'"}s leading national universities, renowned
            for its prestigious academic programs and cutting-edge research initiatives. Established in 1911, it has
            evolved into a comprehensive institution offering a wide range of disciplines spanning the arts, sciences,
            engineering, medicine, and social sciences. The university prides itself on its commitment to academic
            excellence, fostering a vibrant intellectual community that encourages interdisciplinary collaboration and
            innovation.
          </BodyTypography>
          <BodyTypography>
            Its faculty comprises distinguished scholars and researchers who are at the forefront of their fields,
            contributing to advancements in knowledge and addressing global challenges. With a strong emphasis on
            internationalization, Kyushu University actively promotes international exchange and cooperation, attracting
            students and scholars from around the world. Its diverse student body benefits from a multicultural learning
            environment that prepares them to thrive in an increasingly interconnected world.
          </BodyTypography>
          <BodyTypography>
            Kyushu University{"'"}s state-of-the-art facilities and resources provide students with unparalleled
            opportunities for academic and personal growth. From well-equipped laboratories and research centers to
            libraries and student support services, the university offers a conducive environment for learning,
            research, and extracurricular activities.
          </BodyTypography>
          <BodyTypography>
            Beyond academics, Kyushu University boasts a rich cultural heritage and vibrant campus life. Students engage
            in a wide range of extracurricular activities, including sports, arts, and community service, fostering
            personal development and lifelong friendships. In essence, Kyushu University stands as a beacon of academic
            excellence, innovation, and global engagement, shaping the leaders and thinkers of tomorrow while making
            significant contributions to society and the world at large.
          </BodyTypography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", width: { xs: "75%", sm: "60%" } }}>
          <iframe
            allowFullScreen
            height={250}
            loading="lazy"
            src="https://www.youtube.com/embed/6V8Ib77rp8s"
            title="Kyushu University Countless Ways to Connect"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </Box>
      </Stack>
    </Box>
  );
}

/*




*/
