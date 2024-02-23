import React from "react";
import imgs from "../thumb-up.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container fixed-top">
      <nav class="navbar navbar-expand-lg px-4">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src={imgs}
              alt="Logo"
              width="30"
              height="30"
              class="d-inline-block align-text-top mx-2"
            />
            Feedback
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul
              class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              //   style={{ height: "100px" }}
            >
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/feedback"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#">
                  Contact Us
                </a>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="/feedbackDetails">
                  Feedbacks
                </Link>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
