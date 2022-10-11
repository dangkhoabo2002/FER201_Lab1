import React, { Component } from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Form, Link } from "react-router-dom";
import { Navbar, NavItem, Icon } from "react-materialize";
import useClock from "../CustomHook";
export default function Navigation() {
  const [time, ampm] = useClock();
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    //   <div className="navbar something">
    //     {/* <div
    //         id="MyClockDisplay"
    //         className="clock"
    //         style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    //       >
    //         {time}
    //         <span>{ampm}</span>
    //       </div> */}
    //     <nav
    //       className="navbar-pc"
    //       style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    //     >
    //       <ul className="nav-cont">
    //         <Link to={`/`}>
    //           <li>
    //             <a className="active" href="#home" style={{ color: theme.color }}>
    //               Home
    //             </a>
    //           </li>
    //         </Link>
    //         <li>
    //           <a href="#review" style={{ color: theme.color }}>
    //             Review
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#booking" style={{ color: theme.color }}>
    //             Booking
    //           </a>
    //         </li>
    //         <Link to={`/contact`}>
    //           <li>
    //             <a
    //               className="contact"
    //               href="#Contact"
    //               style={{ color: theme.color }}
    //             >
    //               Contact
    //             </a>
    //           </li>
    //         </Link>
    //         <li>
    //           <div style={{ position: "relative" }}>
    //             <a
    //               for="theme_toggle"
    //               className="switch-mode"
    //               href="#"
    //               onClick={toggle}
    //               style={{
    //                 backgroundColor: theme.backgroundColor,
    //                 color: theme.color,
    //                 outline: "none",
    //               }}
    //             >
    //               Switch to {!dark ? "Dark" : "Light"}
    //             </a>
    //           </div>
    //         </li>
    //       </ul>
    //     </nav>

    //     {/* =======================RESPONSIVE============================== */}

    //     <div className="navTop-mobile">
    //       <label for="nav-mobile-input" className="navbar-icon">
    //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    //           <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
    //         </svg>
    //       </label>

    //       <div style={{ position: "relative" }}>
    //         <a
    //           for="theme_toggle"
    //           className="switch-mode"
    //           href="#"
    //           onClick={toggle}
    //           style={{
    //             backgroundColor: theme.backgroundColor,
    //             color: theme.color,
    //             outline: "none",
    //           }}
    //         >
    //           Switch to {!dark ? "Dark" : "Light"}
    //         </a>
    //       </div>
    //     </div>
    //     <input hidden type="checkbox" name="" id="nav-mobile-input"></input>
    //     <label for="nav-mobile-input" className="overlay-menu"></label>

    //     <nav
    //       className="nav-mobile"
    //       style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    //     >
    //       {/* <label for="nav-mobile-input" className="div-close-mobile navbar-close-mobile">
    //         &times;
    //       </label> */}
    //       <ul className="nav-mobile-list">
    //         <Link to={`/`}>
    //           <li>
    //             <a
    //               className="active nav-mobile-link"
    //               href="#home"
    //               style={{ color: theme.color }}
    //             >
    //               Home
    //             </a>
    //           </li>
    //         </Link>
    //         <li>
    //           <a
    //             className="nav-mobile-link"
    //             href="#review"
    //             style={{ color: theme.color }}
    //           >
    //             Review
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             className="nav-mobile-link"
    //             href="#booking"
    //             style={{ color: theme.color }}
    //           >
    //             Booking
    //           </a>
    //         </li>
    //         <Link to={`/contact`}>
    //           <li>
    //             <a
    //               className="contact nav-mobile-link"
    //               href="#Contact"
    //               style={{ color: theme.color }}
    //             >
    //               Contact
    //             </a>
    //           </li>
    //         </Link>
    //       </ul>
    //     </nav>
    //   </div>

    <Navbar sx={{ bgcolor: 'secondary.main' }}
      className="menu"
      alignLinks="left"
      brand={<span className="brand-logo">Kow Cinema</span>}
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
    >
      <ul>
        <li>
          <Link to="/">
            <Icon left>home</Icon>Home
          </Link>
        </li>
        <li to="/about">
          <Link to="/about">
            <Icon left>info_outline</Icon>About
          </Link>
        </li>
        <li to="/news">
          <Link to="/news">
            <Icon left>dvr</Icon>News
          </Link>
        </li>
        <li to="/contact">
          <Link to="/contact">
            <Icon left>contacts</Icon>Contact
          </Link>
        </li>
      </ul>
    </Navbar>
  );
}
