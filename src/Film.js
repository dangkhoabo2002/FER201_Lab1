import React, { Component, useState } from "react";
import { List } from "./ListOfFilms";
import { ThemeContext } from "./components/ThemeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Film() {
  const [film, setFilm] = useState([]);
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <div
      className="container"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      {List.map((film) => (
        <div className="column">
          <div className="card">
            <img src={film.img} />
            <h2 style={{ color: theme.color }}>{film.title}</h2>
            <h5 style={{ color: theme.color }}>{film.year}</h5>
            <p className="nation" style={{ color: theme.color }}>
              {film.nation}
            </p>
            <Link to={`detail/${film.id}`}>
              <p>
                <a href="#popup1" id="openPopUp">
                  <button
                    onClick={() => {
                      setFilm(film);
                    }}
                    style={{ color: theme.color }}
                  >
                    Detail
                  </button>
                </a>
              </p>
            </Link>
          </div>
        </div>
      ))}
      <div id="popup1" className="overlay">
        <div
          className="popup column card"
          style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
        >
          <img src={film.img} />
          <h2>{film.name}</h2>
          <a className="close" href="#">
            &times;
          </a>
          <div className="content">{film.info}</div>
        </div>
      </div>
    </div>
  );
}
