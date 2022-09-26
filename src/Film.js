import React, { Component, useState } from "react";
import { List } from "./ListOfFilms";
export default function Film() {
  const [film, setFilm] = useState([]);
  return (
    <div className="container">
      {List.map((film) => (
        <div className="column">
          <div className="card">
            <img src={film.img} />
            <h2>{film.title}</h2>
            <h5>{film.year}</h5>
            <p className="nation">{film.nation}</p>
            <p>
              <a href="#popup1" id="openPopUp">
                <button
                  onClick={() => {
                    setFilm(film);
                  }}
                >
                  Detail
                </button>
              </a>
            </p>
          </div>
        </div>
      ))}
      <div id="popup1" className="overlay">
        <div className="popup column card">
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
