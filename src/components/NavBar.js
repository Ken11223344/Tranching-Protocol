import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
const NavBar = ({ routes }) => {
  const location = useLocation();
  const changePath = (url) => {
    window.location.href = url;
  };
  const [open, setOpen] = useState(false);
  return (
    <header className="container">
      <nav className="pc">
        <Link to="/">
          <img
            alt="logo"
            src={require("../static/images/Logo Tranching.png")}
            title="logo"
          />
        </Link>
        <ul>
          {routes.map((route) => {
            return (
              <li key={route.key}>
                <Link
                  className={
                    location.pathname === route.path
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to={route.path}
                >
                  <div className="c">{route.title}</div>
                  {route.child.length > 0 && (
                    <div className="child">
                      {route.child.map((child) => {
                        return (
                          <div
                            key={child.key}
                            onClick={() => {
                              changePath(child.path);
                            }}
                          >
                            {child.title}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* <button>Embrace Tranching Now</button> */}
      </nav>
      <nav className="mobi">
        <div className="tops">
          <Link to="/">
            <img
              alt="logo"
              src={require("../static/images/Logo Tranching.png")}
              title="logo"
            />
          </Link>
          <div
            onClick={() => {
              setOpen(!open);
            }}
          >
            <img
              alt="menu"
              src={require(`../static/images/${open ? "close" : "menu"}.png`)}
              title="menu"
            />
          </div>
        </div>
        {open ? (
          <div className="list">
            <ul>
              {routes.map((route) => {
                return (
                  <li key={route.key}>
                    <Link
                      className={
                        location.pathname === route.path
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to={route.path}
                    >
                      <div className="c">{route.title}</div>
                      {route.child.length > 0 && (
                        <div className="child">
                          {route.child.map((child) => {
                            return (
                              <div
                                key={child.key}
                                onClick={() => {
                                  changePath(child.path);
                                }}
                              >
                                {child.title}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
            {/* <button>Embrace Tranching Now</button> */}
          </div>
        ) : null}
      </nav>
    </header>
  );
};

export default NavBar;
