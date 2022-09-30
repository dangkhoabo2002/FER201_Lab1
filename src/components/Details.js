import React from "react";
import { useParams } from "react-router-dom";
import { List } from "../ListOfFilms";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";


export default function Details() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  const userName = useParams();
  const film = List.find((obj) => {
    return obj.id == userName.id;
  });

  let cost = film.cost.toLocaleString();

  return (
    <div className="container-detail" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <div className="product-card">
        <div className="product-img">
          <img src={`../${film.img}`} alt="" />
        </div>
        <div className="product-details">
          <div className="head-card">
            <h1 style={{color: theme.color }}>{film.title}</h1>
            <div className="product-price" style={{color: theme.color, backgroundColor:'rgb(255,0,215,0.2)'}}>Market value: {cost}</div>
          </div>
          <div className="product-bottom-details" style={{color: theme.color }}>{film.info}</div>
        </div>
      </div>
    </div>
  );
}
