import styled from "@emotion/styled";
import { Box, IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useLayoutEffect, useState } from "react";
import Note from "./Note";
const NotesStyle = styled(Stack)(() => ({
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "start",
}));

function Notes() {
  const [data, setData] = useState([]);

  async function getData() {
    const response = await fetch("http://localhost:8000/notes?");
    const jsonData = await response.json();
    setData(jsonData);
    console.log(data);
  }
  useLayoutEffect(() => {
    getData();
  }, []);
  return (
    <Box>
      <Typography variant="h6" color="primary.main" fontWeight="bold" mb={2}>
        Add, edit and delete TO-DO list
      </Typography>
      <NotesStyle gap={5}>
        {data.map(({ id, date, title, note }) => (
          <Note key={id} date={date} id={id} title={title} note={note} />
        ))}
      </NotesStyle>
    </Box>
  );
}

export default Notes;
