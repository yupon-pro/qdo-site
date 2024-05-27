import BodySubtitle from "@/ui/Component/CustomMui/BodySubtitle";
import BodyTypography from "@/ui/Component/CustomMui/BodyTypography";
import { Box, Container, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Container
        maxWidth={false}
        sx={{
          backgroundImage: "url('/thirdparty/itocampus.jpeg')",
          backgroundSize: "100%",
          backgroundPosition: { xs: "top", sm: "50% 50%", md: "50% 75%" },
          backgroundRepeat: "no-repeat",
          backgroundColor: "transparent",
          opacity: "0.7",
          height: { xs: "35vh", sm: "50vh", md: "70vh" },
          transitionDuration: "1000ms",
          transitionProperty: "height, background-position",
        }}
      />
      <Stack alignItems="center" spacing={5} sx={{ marginY: 5 }}>
        <Box>
          <Typography sx={{ typography: { xs: "h5", sm: "h4", md: "h3" } }}> Kyushu University</Typography>
        </Box>
        <Box sx={{ width: { xs: "75%", sm: "60%" } }}>
          <BodySubtitle>Outline</BodySubtitle>
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
          <BodySubtitle boxSx={{ marginY: 3 }}>Facilities & Program</BodySubtitle>
          <BodyTypography>
            Ito campus of Kyushu University is one of the most largest universities with well-equipped laboratories
            and study rooms. Its state-of-the-art facilities and resources provide students with unparalleled
            opportunities for academic and personal growth. In addition, Kyushu University is famous for its
            Central Library which is one of the largest libraries in colleges. It has a large number of books ranging
            from academic to practical. It has many desks for students to study quietly. If students have questions
            about their assignments and lectures, they can access to the student support service in the library. The
            environment is well developed.
          </BodyTypography>
          <BodyTypography>
            Kyushu University has a distinctive study program. The basic education program known as {'"'}KIKAN{'"'}{" "}
            provides a wide range of fundamentally academic knowledge to freshmen. The university also provides the
            exchange program with many overseas colleges. Within the campus, students can participate in international
            lectures to improve students{"'"} English skills and provide opportunities to communicate with foreign
            people. In particular, the class of co-creation faculty named as {'"'}KYOSO{'"'} offer interdisciplinary and
            international lectures regarding environment, poverty and global issues.
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
