import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Details() {
  const { theme, toggle, dark } = useContext(ThemeContext);

  return (
    <div
      className="container-detail"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <div className="card-container">
        <div className="card-contact" style={{backgroundColor:'rgba(250, 0, 213, 0.2)'}}>
          <div className="information">
            <h2 className="contact-title">Get in touch</h2>
            <div className="label">
              <input placeholder="Name" />
              <input placeholder="Email" />
              <input placeholder="Message" />
              <button style={{color: theme.color}}>Submit</button>
            </div>
          </div>
          <div className="contact-us"style={{backgroundColor:'rgba(250, 0, 213, 0.2)'}} >
            <h3>
              Address: <br></br>198 West 21th Street, Suite 721 New York NY
              10016
            </h3>
            <h3>
              Phone:
              <br></br>+ 1235 2355 98
            </h3>
            <h3>
              Email: <br></br>info@yoursite.com
            </h3>
            <h3>
              Website: <br></br> yoursite.com
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
