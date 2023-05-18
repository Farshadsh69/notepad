import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { toast } from "react-toastify";

export default function AddNoteDialog({ openDialog, setOpenDialog }) {
  const [title, setTitle] = React.useState("");
  const [note, setNote] = React.useState("");

  const countTitle = 50;
  const countNote = 500;

  const handleClose = () => {
    setOpenDialog(false);
  };
  const id = Math.floor(Math.random() * 1000);
  //...............................Date
  let dateObj = new Date();
  let month = dateObj.getUTCMonth() + 1; //months from 1-12
  let day = dateObj.getUTCDate();
  let year = dateObj.getUTCFullYear();
  let hours = dateObj.getUTCHours();
  let minutes = dateObj.getUTCMinutes();

  let date = year + "/" + month + "/" + day + "|'" + hours + ":" + minutes;
  //.................................................................
  const handleSave = () => {
    setOpenDialog(false);
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
        setInterval(() => {
          window.location.reload();
        }, 2000);
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
