import React from "react";
import grey from "@material-ui/core/colors/grey";
import { Route, NavLink } from "react-router-dom";

const AppBar = () => {
  return (
    <div className="appbar">
      <div>
        <NavLink to="/" className="nav_link_p">
          <img src="../assets/logo.png" className="icon_bar_icon_i" />
        </NavLink>
      </div>

      <div className="icon_bar_icon">
        <NavLink to="/users" className="nav_link_p">
          <img src="../assets/city.png" />
        </NavLink>

        <p>
          <NavLink to="/users" className="nav_link_p">
            Клиенты
          </NavLink>
        </p>
      </div>
      <div className="icon_bar_icon">
        <NavLink to="/settings" className="nav_link_p">
          <img src="../assets/sett.png" />
        </NavLink>

        <p>
          <NavLink to="/settings" className="nav_link_p">
            Настройки
          </NavLink>
        </p>
      </div>
      <div className="icon_bar_icon">
        <NavLink to="/actives" className="nav_link_p">
          <img src="../assets/peaple.png" />
        </NavLink>

        <p>
          <NavLink to="/actives" className="nav_link_p">
            Сотрудники
          </NavLink>
        </p>
      </div>
      <div className="icon_bar_icon">
        <NavLink to="/list" className="nav_link_p">
          <img src="../assets/file.png" />
        </NavLink>
        <p>
          <NavLink to="/list" className="nav_link_p">
            Заяавки
          </NavLink>
        </p>
      </div>
      <div className="icon_bar_icon">
        <NavLink to="/bazazn" className="nav_link_p">
          <img src="../assets/book.png" />
        </NavLink>

        <p>
          <NavLink to="/bazazn" className="nav_link_p">
            База знаный
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default AppBar;
