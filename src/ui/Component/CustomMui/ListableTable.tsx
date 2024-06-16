import { Box, SxProps, Typography } from "@mui/material";
import { Fragment } from "react";

type ListableTable = {
  title:{
    body:string;
    sx?:SxProps;
  };
  description:{
    body:string;
    sx?:SxProps;
  };
  caution?:{
    body?:string[];
    sx?:SxProps;
  };
  size?:SxProps
};

export default function ListableTable(props:ListableTable){
  const { title, description, caution, size } = props;
  
  return(
    <Box sx={{  ...size  }} >
      <Typography variant="body1" fontWeight="bold" sx={{ lineHeight: "25px", ...title.sx }}>
        { title.body }
      </Typography>
      <Typography variant="body1" sx={{ paddingLeft: "20px",  ...description.sx }} >
        { description.body }
      </Typography>
      {caution?.body && caution.body.map((attention,index) => (
        <Typography key={index} variant="caption" sx={{ paddingLeft: "20px",  ...caution?.sx }} >
          {attention}
          <br />
        </Typography>
      ))}
    </Box>
  );
}