import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const rootPath = useLocation().pathname.split("/")[1];
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Sanctuary
      </a>
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
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
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
              <a class="dropdown-item" href="#">
                FAQ
              </a>
              <a class="dropdown-item" href="#">
                Terms
              </a>
              <a class="dropdown-item" href="#">
                Causes
              </a>
              <a class="dropdown-item" href="#">
                Process
              </a>
              <a class="dropdown-item" href="#">
                Their Stories
              </a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Resources
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Get Involved
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
