import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function Options(props) {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
          <a className="navbar-brand fs-2" href="/">
              {props.title}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item my-3">
                  <Link to={"/schedule"} className="nav-link">
                    Schedule
                  </Link>
                </li>
                <li className="nav-item my-3">
                  <Link to={"/result"} className="nav-link">
                    Results
                  </Link>
                </li>
                <li className="nav-item my-3">
                  <Link to={"/registration"} className="nav-link">
                    Registration
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Options
