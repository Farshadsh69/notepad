import styled from "@emotion/styled";
import PercentIcon from "@mui/icons-material/Percent";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import noteImage from "../../assets/images/1.png";
import Feature from "./Feature";
import { Link } from "react-router-dom";

const ImageStyle = styled(Box)(() => ({
  border: "1px solid #bbc0c6",
  borderRadius: "30%",
  backgroundColor: "#eaf7ff1a",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
}));
const TextStyle = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: 30,
}));
const FeatureStyle = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 50,
}));
const FeatureBoxStyle = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
  marginTop: 30,
  gap: 10,
}));
function Landing() {
  const data = [
    {
      id: 1,
      title: "salam",
      subtitle: "hnsjdshdjhdkjhjsdhksjdh",
      icon: <PercentIcon />,
    },
    {
      id: 2,
      title: "salam",
      subtitle: "hnsjdshdjhdkjhjsdhksjdh",
      icon: <PercentIcon />,
    },
    {
      id: 3,
      title: "salam",
      subtitle: "hnsjdshdjhdkjhjsdhksjdh",
      icon: <PercentIcon />,
    },
    {
      id: 4,
      title: "100% Free",
      subtitle: "hnsjdshdjhdkjhjsdhksjdh",
      icon: <PercentIcon />,
    },
  ];
  return (
    <Grid container lg={12}>
      <Grid item lg={5} sm={12}>
        <TextStyle>
          <Typography variant="h2" pl={10} pt={10} color="primary.main">
            Create <span style={{ color: "blue" }}>free</span> notes <br />
            and keep them for yourself
          </Typography>
          <Typography
            color="primary.main"
            variant="subtitle1"
            m={2}
            p={2}
            sx={{ border: "1px solid #bbc0c6", borderRadius: 8 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            hic repudiandae deleniti animi impedit itaque aliquid culpa ipsum
            labore molestiae explicabo veritatis, neque eius, tempora eligendi
            libero, non fugiat. Id.
          </Typography>
          <Link to="/notepad">
            <Button variant="contained" color="info">
              Get Start
            </Button>
          </Link>
        </TextStyle>
      </Grid>
      <Grid item lg={6} sm={12} width="100%" ml={2} mr={2}>
        <ImageStyle>
          <img src={noteImage} alt="note" className="imgStyle" />
        </ImageStyle>
      </Grid>
      <FeatureStyle>
        <Typography variant="subtitle2" sx={{ color: "#0288d1" }} mt={2} mb={2}>
          Feature
        </Typography>
        <Typography
          variant="h4"
          color="primary.main"
          fontWeight="bold"
          sx={{ textShadow: "2px 2px 5px #3498db" }}
        >
          our notepad feature
        </Typography>
        <FeatureBoxStyle>
          {data.map((item) => (
            <Feature
              title={item.title}
              subtitle={item.subtitle}
              icon={item.icon}
              key={item.id}
            />
          ))}
        </FeatureBoxStyle>
      </FeatureStyle>
    </Grid>
  );
}

export default Landing;
