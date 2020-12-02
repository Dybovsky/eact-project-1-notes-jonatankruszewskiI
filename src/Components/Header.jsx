import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import NoteIcon from "@material-ui/icons/Note";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";

const useStyles = makeStyles((theme) => ({
  typographyStyles: {
    flex: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography className={classes.typographyStyles} variant="h6">
          Note App
        </Typography>
        <NoteIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
