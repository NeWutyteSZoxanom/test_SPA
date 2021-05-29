import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import NavBar from "./NavBar";
import ListReq from "./Content/ListReq";
import Users from "../pages/Users";
import Actives from "../pages/Actives";
import BazaZn from "../pages/BazaZn";
import Settings from "../pages/Settings";
import { Route, NavLink } from "react-router-dom";

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

const Main = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Route path="/users" component={Users} />
        <Route path="/settings" component={Settings} />
        <Route path="/bazazn" component={BazaZn} />
        <Route path="/actives" component={Actives} />
        <Route path="/list" component={ListReq} />
      </Grid>
    </div>
  );
};

export default Main;
