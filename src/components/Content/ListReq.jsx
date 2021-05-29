import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../index";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NewReq from "./NewReq";
import EditReq from "./EditReq";
import { Route, NavLink, useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { fetchStatus, fetchTasks } from "../../http/taskApi";
import { TASK_ID, TASK_ID_CRE } from "../../const";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  table: {
    minWidth: 850,
  },
}));

const ListReq = observer(() => {
  const history = useHistory();

  const { tasksStore } = useContext(Context);
  const classes = useStyles();

  useEffect(() => {
    fetchStatus().then((data) => tasksStore.setStatus(data));
    fetchTasks().then(({ data }) => {
      tasksStore.setTasks(data.value);
    });
  }, [tasksStore.isRender]);

  const [visible, setVisible] = useState(false);

  const handleOpen = () => {
    if (!visible) {
      setVisible(true);
    } else setVisible(false);
  };

  return (
    <>
      <div className="padding_button">
        <Fab
          className="table_butt"
          variant="extended"
          size="medium"
          color="secondary"
          aria-label="add"
          className={classes.margin}
          onClick={handleOpen}
        >
          <NavLink to="/list/create" className="nav_link">
            Создать заявку
          </NavLink>
        </Fab>
      </div>
      {visible ? (
        <Grid container spacing={0}>
          <Grid item xs={5}>
            <div className="table">
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="caption table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left" size="small">
                        ID
                      </TableCell>
                      <TableCell align="left" size="small">
                        Название
                      </TableCell>
                      <TableCell align="left" size="small">
                        Статус
                      </TableCell>
                      <TableCell align="left" size="small">
                        Исполнитель
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tasksStore.tasks.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell component="th" scope="row" size="small">
                          {row.id}
                        </TableCell>
                        <TableCell align="left" size="small">
                          <h3
                            className="h_curso"
                            onClick={() => {
                              history.push(TASK_ID_CRE + "/" + row.id);
                            }}
                          >
                            {row.name}
                          </h3>
                        </TableCell>
                        <TableCell align="left" size="small">
                          <Fab
                            variant="extended"
                            size="medium"
                            color="secondary"
                            aria-label="add"
                            className={classes.margin}
                            onClick={handleOpen}
                          >
                            <NavLink
                              to={`/list/edit/${row.id}`}
                              className="nav_link"
                            >
                              {row.statusName}
                            </NavLink>
                          </Fab>
                        </TableCell>
                        <TableCell align="left" size="small">
                          {row.executorName}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Grid>
          <Grid item xs={7}>
            <Route path="/list/create" component={NewReq} />
            <Route path="/list/edit/:id" component={EditReq} />
          </Grid>
        </Grid>
      ) : (
        <Grid item xs={12}>
          <div className="table">
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="caption table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left" size="small">
                      ID
                    </TableCell>
                    <TableCell align="left" size="small">
                      Название
                    </TableCell>
                    <TableCell align="left" size="small">
                      Статус
                    </TableCell>
                    <TableCell align="left" size="small">
                      Исполнитель
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tasksStore.tasks.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row" size="small">
                        {row.id}
                      </TableCell>
                      <TableCell align="left" size="small">
                        <h3
                          className="h_curso"
                          onClick={() => history.push(TASK_ID + "/" + row.id)}
                        >
                          {row.name}
                        </h3>
                      </TableCell>
                      <TableCell align="left" size="small">
                        <Fab
                          variant="extended"
                          size="medium"
                          color="secondary"
                          aria-label="add"
                          className={classes.margin}
                          onClick={handleOpen}
                        >
                          <NavLink
                            to={`/list/edit/${row.id}`}
                            className="nav_link"
                          >
                            {row.statusName}
                          </NavLink>
                        </Fab>
                      </TableCell>
                      <TableCell align="left" size="small">
                        {row.executorName}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Grid>
      )}
    </>
  );
});

export default ListReq;
