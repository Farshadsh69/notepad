import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React, { useLayoutEffect, useState } from "react";
import Note from "./Note";
import { Stack } from "@mui/system";
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
    <NotesStyle gap={5}>
      {data.map(({ id, date, title, note }) => (
        <Note key={id} date={date} id={id} title={title} note={note} />
      ))}
    </NotesStyle>
  );
}

export default Notes;
