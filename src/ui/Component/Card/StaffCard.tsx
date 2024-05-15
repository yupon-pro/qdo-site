import { Staff } from "@/lib/Definition";
import { Avatar, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";

export default function StaffCard({ staff }: { staff: Staff }) {
  return (
    <Card square={false} elevation={5} sx={{ paddingTop: "5%" }}>
      <CardMedia sx={{ display: "flex", justifyContent: "center" }}>
        <Avatar src={staff.image} alt={staff.name} sx={{ width: 200, height: 200 }} />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom align="center" variant="h5" component="div">
          {staff.name}
        </Typography>
        <Typography gutterBottom align="center" variant="subtitle1" component="div">
          {staff.role}
        </Typography>
      </CardContent>
    </Card>
  );
}
