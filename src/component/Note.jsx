import styled from "@emotion/styled";
import { Box, IconButton, Stack, TextField, Typography } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import EditNoteIcon from "@mui/icons-material/EditNote";

import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
import UpdateNoteDialog from "./UpdateNoteDialog";
const NoteStyle = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: 250,
  height: 300,
  backgroundColor: "background.main",
  padding: 10,
  borderRadius: 10,
}));
const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};
const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
    width: 222px;
    height:145px !important;
    overflow-y: scroll !important;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0px 2px 24px ${
      theme.palette.mode === "dark" ? blue[900] : blue[100]
    };
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${
        theme.palette.mode === "dark" ? blue[600] : blue[200]
      };
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
);
function Note({ title, note, date, id }) {
  const [openUpdateNote, setOpenUpdateNote] = useState(false);
  async function deleteItem() {
    const response = await fetch(`http://localhost:8000/notes/${id}`, {
      method: "DELETE",
    });
    if (response.status === 200 || 201) {
      toast.success("deleted successfully");
    } else {
      toast.error("deleted Failed");
    }
  }

  const handelDelete = () => {
    deleteItem();
    setInterval(() => {
      window.location.reload();
    }, 2000);
  };
  return (
    <NoteStyle sx={{ backgroundColor: "background.light" }}>
      <Stack>
        <IconButton onClick={() => setOpenUpdateNote(true)}>
          <EditNoteIcon color="success" />
        </IconButton>
        {/* <Typography color="red">id : {id}</Typography> */}
        <Typography variant="h5" color="primary.main" mb={0.5}>
          {title}
        </Typography>
        <StyledTextarea value={note} />
      </Stack>
      <Stack
        alignItems="center"
        justifyContent="space-between"
        flexDirection="row"
      >
        <Typography color="primary.main">{date}</Typography>
        <IconButton onClick={handelDelete}>
          <DeleteIcon color="error" />
        </IconButton>
      </Stack>
      <UpdateNoteDialog
        openDialog={openUpdateNote}
        setOpenDialog={setOpenUpdateNote}
        id={id}
        title={title}
        note={note}
      />
    </NoteStyle>
  );
}

export default Note;
