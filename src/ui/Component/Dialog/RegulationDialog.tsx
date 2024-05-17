"use client";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";
import PrivacyPolicy from "../Assets/PrivacyPolicy";
import { Fragment, useState } from "react";

export default function RegulationDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Box
        sx={{
          marginInline: "auto",
          paddingY: 2,
          borderTop: "1px solid black",
          borderBottom: "1px solid black",
          width: 1,
          maxHeight: "40vh",
          overflow: "scroll",
          ":hover": { cursor: "pointer" },
        }}
        onClick={handleClickOpen}
      >
        <PrivacyPolicy />
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Do you agree with this privacy policy?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <PrivacyPolicy />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
}
