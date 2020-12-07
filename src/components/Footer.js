import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer class="page-footer font-small footer-color pt-4">
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <Link className="font-weight-bold" to="/terms">
              Terms
            </Link>
          </div>
          <div class="col-sm">
            <Link className="nav-link font-weight-bold" to="/getinvolved">
              Get Involved
            </Link>
          </div>
          <div class="col-sm">
            <Link className="nav-link font-weight-bold" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div class="footer-copyright text-center py-3">
        © 2020 Copyright: Sanctuary Team
      </div>
    </footer>
  );
};

export default Footer;
