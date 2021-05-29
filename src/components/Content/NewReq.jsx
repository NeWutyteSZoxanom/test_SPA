import React, { useState, useContext, useEffect } from "react";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import IconButton from "@material-ui/core/IconButton";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Fab from "@material-ui/core/Fab";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { createTask } from "../../http/taskApi";
import { Context } from "../../index";
import { fetchStatus, fetchTasks } from "../../http/taskApi";

const NewReq = observer(() => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [disable, setDdisable] = useState(true);

  const { tasksStore } = useContext(Context);

  const addTask = async () => {
    setDdisable(false);
    const data = createTask({ name: name, description: description });
    setName(data.name);
    setDescription(data.description);
    if (tasksStore.isRender == false) {
      tasksStore.setRender(true);
    } else tasksStore.setRender(false);
  };
  const lastItem = tasksStore.tasks[tasksStore.tasks.length - 1].id;
  console.log(tasksStore.tasks[tasksStore.tasks.length - 1].id);
  // console.log(tasksStore.tasks.length - 1);
  return (
    <div className="blabla">
      <div className="cre">
        <div>
          <h3 className="cre_h">Новая заявка</h3>
        </div>
        <div>
          <IconButton>
            <CloseOutlinedIcon color="primary" />
          </IconButton>
        </div>
      </div>

      <div className="content_create">
        <div className="content_create_area">
          <div>
            <p>Название</p>
          </div>
          <TextareaAutosize
            value={name}
            onChange={(e) => setName(e.target.value)}
            rowsMax={6}
            aria-label="maximum height"
            placeholder="Maximum 4 rows"
            rowsMin={6}
          />
        </div>

        <div className="content_create_area">
          <div>
            <p>Описание</p>
          </div>
          <TextareaAutosize
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rowsMax={6}
            aria-label="maximum height"
            placeholder="Maximum 4 rows"
            rowsMin={6}
          />
        </div>
        <div className="content_create_area">
          <Fab
            className="table_butt"
            variant="extended"
            size="medium"
            color="primary"
            aria-label="add"
            onClick={addTask}
          >
            Сохранить
          </Fab>
        </div>
        <div className="content_create_area">
          <Fab
            className="table_butt"
            disabled={disable}
            variant="extended"
            size="medium"
            color="primary"
            aria-label="add"
          >
            <NavLink to={`/list/edit/${lastItem}`} className="nav_link">
              Изменить заявку
            </NavLink>
          </Fab>
        </div>
      </div>
    </div>
  );
});

export default NewReq;
