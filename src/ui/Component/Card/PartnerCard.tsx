import { Partner } from "@/lib/Definition";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

export default function ImageCard({ partner }: { partner: Partner }) {
  return (
    <Card sx={{ maxWidth: 345 }} elevation={3} >
      <CardActionArea>
        <CardMedia component="img" height="140" image={partner.image} alt={partner.name} />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="div">
            {partner.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
