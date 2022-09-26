import React, { Component } from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import useClock from "../CustomHook";
export default function Navigation() {
  const [time, ampm] = useClock()
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <div>
      <div className="toggle_menu">
        <img src="https://www.vhv.rs/file/max/37/372285_menu-icon-png.jpg" />
      </div>
      
      <div className="navbar something">
      <div id="MyClockDisplay" className="clock" style={{ backgroundColor: theme.backgroundColor, color: theme.color}}>
            {time}
            <span>{ampm}</span>
        </div>
        <nav
          style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
        >
          <ul className="nav-cont">
            <li>
              <a className="active" href="#home" style={{ color: theme.color }}>
                Home
              </a>
            </li>
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
            <li>
              <a
                className="contact"
                href="#Contact"
                style={{ color: theme.color }}
              >
                Contact
              </a>
            </li>
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
    </div>
  );
}
