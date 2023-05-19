import styled from "@emotion/styled";
import { Box, Paper, Typography } from "@mui/material";
import React from "react";
const IconStyle = styled(Box)(() => ({
  width: 50,
  height: 50,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 10,
}));
const PaperStyle = styled(Paper)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: 15,
  borderRadius: 10,
  gap: 10,
  width: 200,
  height: 200,
}));
function Feature({ title, subtitle, icon }) {
  return (
    <PaperStyle>
      <IconStyle sx={{ backgroundColor: "#e6e4eb" }}>{icon}</IconStyle>
      <Typography variant="h5" fontWeight="bold">
        {title}
      </Typography>
      <Typography fontSize="11px">{subtitle}</Typography>
    </PaperStyle>
  );
}

export default Feature;
