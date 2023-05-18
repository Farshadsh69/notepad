import { Dialog } from "@mui/material";
import React from "react";

function ShowDialog({ openDialog, setOpenDialog }) {
  const handleClose = () => {
    setOpenDialog(false);
  };
  return (
    <Dialog
      sx={{
        "& .MuiDialog-paper": {
          width: 500,
          height: 500,
          backgroundColor: "background.main",
          color: "primary.main",
        },
      }}
      open={openDialog}
      onClose={handleClose}
    ></Dialog>
  );
}

export default ShowDialog;
