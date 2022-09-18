import React, { Component } from "react";
import { List } from "./ListOfFilms";
export default class Film extends Component {
  render() {
    return (
      <div className="container">
        {List.map((film) => (
          <div className="column">
            <div className="card">
              <img src={film.img} />
              <h2>{film.title}</h2>
              <h5>{film.year}</h5>
              <p className="nation">{film.nation}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
