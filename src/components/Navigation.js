/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
  const rootPath = useLocation().pathname.split("/")[1];
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white sticky">
      <Link className="navbar-brand" to="/">
        <h3 className="font-weight-bold">Sanctuary</h3>
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ml-auto">
          <li className={"nav-item " + (rootPath === "" ? "active" : "")}>
            <Link className="nav-link font-weight-bold" to="/">
              Home
            </Link>
          </li>
          <li class="nav-item dropdown ">
            <a
              class="nav-link dropdown-toggle font-weight-bold"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Learn
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              {/* <Link className="dropdown-item font-weight-bold" to="/faq">
                FAQ
              </Link> */}
              <Link className="dropdown-item font-weight-bold" to="/terms">
                Terms
              </Link>
              {/* <Link className="dropdown-item font-weight-bold" to="/causes">
                Causes
              </Link>
              <Link className="dropdown-item font-weight-bold" to="/process">
                Process
              </Link>
              <Link className="dropdown-item font-weight-bold" to="/stories">
                Their Stories
              </Link> */}
            </div>
          </li>
          {/* <li
            className={"nav-item " + (rootPath === "resources" ? "active" : "")}
          > */}
          {/* <Link className="nav-link font-weight-bold" to="/resources">
              Resources
            </Link> */}
          {/* </li> */}
          <li
            className={
              "nav-item " + (rootPath === "getinvolved" ? "active" : "")
            }
          >
            <Link className="nav-link font-weight-bold" to="/getinvolved">
              Get Involved
            </Link>
          </li>
          <li
            className={"nav-item " + (rootPath === "contact" ? "active" : "")}
          >
            <Link className="nav-link font-weight-bold" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
