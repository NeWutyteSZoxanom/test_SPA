import React, { useState, useEffect, useContext } from "react";
import Fab from "@material-ui/core/Fab";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import { useParams } from "react-router-dom";
import { fetchOneTask, updateTask } from "../../http/taskApi";
import { Context } from "../../index";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { observer } from "mobx-react-lite";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const EditReq = observer(() => {
  const classes = useStyles();
  const { id } = useParams();
  const { tasksStore } = useContext(Context);
  const [task, setTask] = useState({ info: [] });
  const [check, setCheck] = useState(false);
  const [staId, setStatusId] = useState();
  const [exeId, setExecutorId] = useState();
  const [comment, setComment] = useState("");

  useEffect(() => {
    fetchOneTask(id).then((data) => setTask(data));
    fetchOneTask(id).then((data) => setStatusId(data.statusId));
    fetchOneTask(id).then((data) => setExecutorId(data.executorId));
  }, [id, tasksStore.isRender]);

  console.log(staId);

  const handleChange = () => {
    if (!check) {
      setCheck(true);
    } else setCheck(false);
  };

  const putRequest = () => {
    const data = updateTask({
      id: id,
      statusId: staId,
      executorId: exeId,
      comment: comment,
    });
    setComment("");
    setStatusId(staId);
    setExecutorId(exeId);

    if (tasksStore.isRender == false) {
      tasksStore.setRender(true);
    } else tasksStore.setRender(false);
  };
  // if (task.lifetimeItems.length > 0) {
  //   console.log("wdwd");
  // }

  return (
    <>
      <div className="blabla">
        <div className="update">
          <div>
            <h3 className="cre_h">{task.id}</h3>
          </div>
          <div>
            <p className="cre_p">{task.name}</p>
          </div>
        </div>
        <div className="content_create_scroll">
          <Grid container spacing={0}>
            <Grid item xs={10}>
              <div className="content_create">
                <div className="content_create_area">
                  <div>
                    <p>Описание</p>
                  </div>
                  <div>
                    <p className="cre_o">{task.description}</p>
                  </div>
                </div>

                <div className="content_create_area">
                  <TextField
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    id="standard-full-width"
                    style={{ margin: 8 }}
                    placeholder="Добавление коментания"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
                <div className="content_create_area">
                  <Fab
                    className="table_butt"
                    variant="extended"
                    size="medium"
                    color="primary"
                    aria-label="add"
                    onClick={putRequest}
                  >
                    Сохранить
                  </Fab>
                </div>
                <div className="content_create_area">
                  <FormControlLabel
                    control={
                      <Switch
                        checked={check}
                        onChange={handleChange}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="Показать комменты"
                  />
                </div>

                {check ? (
                  task.lifetimeItems.map((com) =>
                    com.comment ? (
                      <>
                        <div className="comment_req">
                          <div className="comment_req_a">
                            <Avatar />
                          </div>
                          <div>
                            <h4 className="comment_req_h">Иванов Иван</h4>
                            <p>20.20.2202</p>
                          </div>
                        </div>
                        <div className="content_create_area">
                          <div className="comment_req_para">
                            <p className="cre_o" key={com.id}>
                              {com.comment}
                            </p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <></>
                    )
                  )
                ) : (
                  <></>
                )}
              </div>
            </Grid>
            <Grid item xs={2} className="edit_right">
              <div className="padddddd">
                <p className="mar">Статус</p>
                <FormControl
                  className={classes.formControl}
                  className="margin_left"
                >
                  <NativeSelect
                    value={staId}
                    onChange={(e) => setStatusId(e.target.value)}
                    name="age"
                    className={classes.selectEmpty}
                    inputProps={{ "aria-label": "age" }}
                  >
                    <option value=""> {staId}</option>
                    {tasksStore.status.map((stat) => (
                      <option key={stat.id} value={stat.id}>
                        {stat.name}
                      </option>
                    ))}
                  </NativeSelect>
                </FormControl>
              </div>
              <div className="padddddd">
                <p>Заяавитель </p>

                <p className="cre_o">{task.initiatorName}</p>
              </div>

              <div className="padddddd">
                <p className="marr">Исполнитель:</p>
                <FormControl
                  className={classes.formControl}
                  className="margin_left"
                >
                  <NativeSelect
                    value={exeId}
                    onChange={(e) => setExecutorId(e.target.value)}
                    name="age"
                    className={classes.selectEmpty}
                    inputProps={{ "aria-label": "age" }}
                  >
                    <option value=""> {task.executorName}</option>
                    {tasksStore.users.map((user) => (
                      <option key={user.id} value={user.id}>
                        {user.name}
                      </option>
                    ))}
                  </NativeSelect>
                </FormControl>
              </div>

              <div className="padddddd">
                <p className="mar">Приоритет</p>

                <p className="cre_o">{task.priorityName}</p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
});

export default EditReq;
