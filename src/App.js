import "./App.css";
import { useEffect, useContext } from "react";
import { Context } from "./index";
import Grid from "@material-ui/core/Grid";
import AppBar from "./components/AppBar";
import Main from "./components/Main";
import { BrowserRouter, Route } from "react-router-dom";
import { fetchStatus, fetchTasks, fetchUsers } from "./http/taskApi";
import { observer } from "mobx-react-lite";

const App = observer(() => {
  const { tasksStore } = useContext(Context);
  useEffect(() => {
    fetchStatus().then((data) => tasksStore.setStatus(data));
    fetchUsers().then((data) => tasksStore.setUsers(data));
    fetchTasks().then(({ data }) => {
      tasksStore.setTasks(data.value);
    });
  }, [tasksStore.isRender]);

  return (
    <BrowserRouter>
      <Grid container spacing={0}>
        <Grid item xs={1}>
          <AppBar />
        </Grid>

        <Grid item xs={11}>
          <Main />
        </Grid>
      </Grid>
    </BrowserRouter>
  );
});

export default App;
