import { Partner } from "@/lib/Definition";
import { Avatar, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Link from "next/link";

export default function ImageCard({ partner }: { partner: Partner }) {
  const name = partner.name
  const ref = partner.ref
  const image = name.split(" ").map(word => {
    const letters = word.split("")
    letters[0].toUpperCase()
    return letters.join("")
  }).join("")
  console.log(image)

  return (
    <Card square={false} elevation={5} >
      <CardActionArea>
        <Link href={ref} >
          <CardMedia sx={{ display: "flex", justifyContent: "center" }}>
            <Avatar src={`partners/${image}.png`} alt={name} sx={{ width: 200, height: 200 }} />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom align="center" variant="h5" component="div">
              {name}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}

