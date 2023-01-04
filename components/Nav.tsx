import React from "react";

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow p-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            AI Image Generator
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <a
                  type="button"
                  className="nav-link active"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Terms and conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className="modal fade  mt-5"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Terms and Conditions
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              You should not search for graphic or sexual content. Your searches
              are being monitored and your IP is being recorded. Incase of any
              unacceptable search, you IP address wil be fowarded to the
              revlevant authorities for further investigation.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
