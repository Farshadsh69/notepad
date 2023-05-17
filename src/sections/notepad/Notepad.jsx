import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EventNoteIcon from "@mui/icons-material/EventNote";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import { Paper, Popover } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import * as React from "react";
import AddNoteDialog from "../../component/AddNoteDialog";

const drawerWidth = 230;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const PaperStyle = styled(Paper)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start",
  top: 120,
  right: 230,
  gap: 10,
  padding: 10,
  borderRadius: 10,
}));
const PaperStyle2 = styled(Paper)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start",
  top: 200,
  right: 230,
  gap: 10,
  padding: 10,
  borderRadius: 10,
}));
const IconButtonAddStyle = styled(IconButton)(() => ({
  width: 50,
  height: 50,
  backgroundColor: "#2eb8f2",
}));

export default function Notepad() {
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [openPaper1, setOpenPaper1] = React.useState(false);
  const [openPaper2, setOpenPaper2] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  const handlePaperOpen = (e) => {
    if (e === "Notes") {
      setOpenPaper1(true);
      setTimeout(() => {
        setOpenPaper1(false);
      }, 3000);
    } else if (e === "account settings") {
      setOpenPaper2(true);
      setTimeout(() => {
        setOpenPaper2(false);
      }, 3000);
    }
  };
  const stylePaper = {
    cursor: "pointer",
    border: "1px solid ##e2e2e2",
    borderRight: "5px",
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <MuiAppBar sx={{ display: "block", mt: 6 }} open={openDrawer}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            Notepad
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(openDrawer && { display: "none" }) }}
          >
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </MuiAppBar>
      <Main sx={{ mt: 5 }} open={openDrawer}>
        <DrawerHeader />
        <IconButtonAddStyle onClick={() => setOpenDialog(true)}>
          <AddIcon />
        </IconButtonAddStyle>
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "background.main",
            color: "primary.main",
          },
        }}
        variant="persistent"
        anchor="right"
        open={openDrawer}
      >
        <DrawerHeader sx={{ mt: 5 }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon color="primary" />
            ) : (
              <ChevronRightIcon color="primary" />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            { title: "Notes", icon: <EventNoteIcon color="primary" /> },
            { title: "Logout", icon: <LogoutIcon color="primary" /> },
            {
              title: "account settings",
              icon: <SettingsIcon color="primary" />,
            },
          ].map((item) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton onClick={() => handlePaperOpen(item.title)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {openPaper1 && (
        <PaperStyle sx={{ position: "absolute" }}>
          <Typography style={stylePaper}>
            Record, edit and delete notes
          </Typography>
          <Typography style={stylePaper}>
            Add, edit and delete TO-DO list
          </Typography>
        </PaperStyle>
      )}
      {openPaper2 && (
        <PaperStyle2 sx={{ position: "absolute" }}>
          <Typography style={stylePaper}>Viwe IP</Typography>
          <Typography style={stylePaper}>
            Viwe the date and time of login
          </Typography>
        </PaperStyle2>
      )}
      <AddNoteDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </Box>
  );
}
