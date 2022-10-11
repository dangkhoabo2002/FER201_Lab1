import React, { Component, useState } from "react";
import { List } from "./ListOfFilms";
import { ThemeContext } from "./components/ThemeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, Card } from "react-materialize";

export default function Film() {
  const [film, setFilm] = useState([]);
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <Container
      className="container"
      // style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <Row className="row">
        {List.map((film) => (
          <Col className="" m={4}>
            <Card className="card">
              <img src={film.img} loading="lazy" />
              <h4 style={{ color: "white" }}>{film.title}</h4>
              <h5 style={{ color: "white" }}>{film.year}</h5>
              <p className="nation" style={{ color: "white" }}>
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
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
