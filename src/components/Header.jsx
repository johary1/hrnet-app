import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../components/style/Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo">
        <img src="/favicon.png" alt="Logo HRNET" />
        <span className="logo__title">WEALTH HEALTH</span>
      </Link>

      <div className="navigation">
        <ul>
          <li>
            <NavLink
              to="/createemployee"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
              aria-current={(nav) => (nav.isActive ? "page" : null)}
            >
              Create employee
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/currentemployees"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
              aria-current={(nav) => (nav.isActive ? "page" : null)}
            >
              Current employees
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
