import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { random } from "lodash";
import * as React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function AddNoteDialog({ openDialog, setOpenDialog }) {
  const [title, setTitle] = React.useState("");
  const [note, setNote] = React.useState("");

  const countTitle = 50;
  const countNote = 500;

  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm();
  //   const onSubmit = (data) => {
  //     console.log(data);
  //     setOpenDialog(false);
  //     async function postData(url = "", data = {}) {
  //       const response = await fetch(url, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(data),
  //       });
  //       return response.json();
  //     }
  //     postData("http://localhost:8000/notes", data);
  //   };

  const handleClose = () => {
    setOpenDialog(false);
  };
  const id = Math.floor(Math.random() * 1000);
  const handleSave = () => {
    setOpenDialog(false);
    const date = new Date();
    const data = { id, title, note, date };
    async function postData(url = "", data = {}) {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.status === 200 || 201) {
        toast.success("saved successfully");
        setNote("");
        setTitle("");
      } else {
        toast.error("saved Failed");
      }
      return response.json();
    }
    postData("http://localhost:8000/notes", data);
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
    >
      <DialogTitle>Add Note</DialogTitle>
      <DialogContent>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          margin="dense"
          label="title"
          fullWidth
          inputProps={{ maxLength: 50 }}
          variant="standard"
          sx={{
            "& .MuiInput-input": {
              color: "#848080",
            },
            "& .MuiFormLabel-root": {
              color: "#3498db",
            },
          }}
        />
        <Typography>50 / {countTitle - title.length} </Typography>
        <TextField
          onChange={(e) => setNote(e.target.value)}
          value={note}
          autoFocus
          margin="dense"
          label="note"
          fullWidth
          multiline
          variant="standard"
          inputProps={{ maxLength: 500 }}
          sx={{
            "& .MuiInput-input": {
              color: "#848080",
            },
            "& .MuiFormLabel-root": {
              color: "#3498db",
            },
          }}
        />
        <Typography>500 / {countNote - note.length} </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}
