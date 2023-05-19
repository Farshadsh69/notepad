import styled from "@emotion/styled";
import { Dialog, Typography } from "@mui/material";
import React from "react";
const RootStyle = styled(Dialog)(() => ({
  "& .MuiDialog-paper": {
    width: 400,
    height: 100,
    backgroundColor: "background.main",
    color: "primary.main",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
function ShowDialog({ openDialog, setOpenDialog, text }) {
  const handleClose = () => {
    setOpenDialog(false);
  };
  return (
    <RootStyle open={openDialog} onClose={handleClose}>
      <Typography variant="h4">{text}</Typography>
    </RootStyle>
  );
}

export default ShowDialog;
