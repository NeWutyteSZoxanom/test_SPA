import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
const NavBar = () => {
  const classes = useStyles();

  return (
    <div className="navbar">
      <div className="navbar_el">
        <TextField
          id="standard-full-width"
          label="Искать"
          style={{ margin: 8 }}
          placeholder="Искать по сайту"
          fullWidth
          variant="outlined"
          margin="normal"
        />
      </div>
      <div className="navbar_profile">
        <h3>Менеджер Сергей</h3>
        <Avatar src="../assets/dd.png" />
      </div>
    </div>
  );
};

export default NavBar;
