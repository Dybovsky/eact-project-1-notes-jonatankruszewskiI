import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
  Grid,
} from "@material-ui/core";
import NoteIcon from "@material-ui/icons/Note";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import FormCard from "./FormCard";

const useStyles = makeStyles((theme) => ({
  typographyStyles: {
    flex: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const Content = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={4}>
      <Grid item sx={4}>
        <FormCard></FormCard>
      </Grid>
      <Grid item sx={4}>
        <FormCard></FormCard>
      </Grid>
      <Grid item sx={4}>
        <FormCard></FormCard>
      </Grid>
    </Grid>
  );
};

export default Content;
