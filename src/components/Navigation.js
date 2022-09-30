import React, { Component } from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Link } from "react-router-dom";

import useClock from "../CustomHook";
export default function Navigation() {
  const [time, ampm] = useClock();
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <div className="navbar something">
      {/* <div
          id="MyClockDisplay"
          className="clock"
          style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
        >
          {time}
          <span>{ampm}</span>
        </div> */}
      <nav
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        <ul className="nav-cont">
          <Link to={`/`}>
            <li>
              <a className="active" href="#home" style={{ color: theme.color }}>
                Home
              </a>
            </li>
          </Link>
          <li>
            <a href="#review" style={{ color: theme.color }}>
              Review
            </a>
          </li>
          <li>
            <a href="#booking" style={{ color: theme.color }}>
              Booking
            </a>
          </li>
          <Link to={`/contact`}>
            <li>
              <a
                className="contact"
                href="#Contact"
                style={{ color: theme.color }}
              >
                Contact
              </a>
            </li>
          </Link>
          <li>
            <div style={{ position: "relative" }}>
              <a
                for="theme_toggle"
                className="switch-mode"
                href="#"
                onClick={toggle}
                style={{
                  backgroundColor: theme.backgroundColor,
                  color: theme.color,
                  outline: "none",
                }}
              >
                Switch to {!dark ? "Dark" : "Light"}
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
