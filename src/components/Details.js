import React from "react";
import { useParams } from "react-router-dom";
import { List } from "../ListOfFilms";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Container, Row, Col} from "react-materialize";


export default function Details() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  const userName = useParams();
  const film = List.find((obj) => {
    return obj.id == userName.id;
  });

  let cost = film.cost.toLocaleString();

  return (
    <Container className="container-detail" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <Col className="product-card">
        <div className="product-img">
          <img src={`../${film.img}`} alt="" />
        </div>
        <div className="product-details">
          <div className="head-card">
            <h3 style={{color: "white" }}>{film.title}</h3>
            <div className="product-price" style={{color: "white", backgroundColor:'rgb(255,0,215,0.2)'}}> Booking Price: {cost}</div>
          </div>
          <div className="product-bottom-details" style={{color: "white" }}>{film.info}</div>
        </div>
      </Col>
    </Container>
  );
}
