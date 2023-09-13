import { NavLink } from "react-router-dom";
import "./style/Error404.css";

/**
 * ERROR PAGE
 *
 */
const Error404 = () => {
  return (
    <section className="error">
      <p className="title-404">Erreur 404</p>
      <p className="text-404">Aucun résultat!</p>
      <NavLink to="/">
        <li className="back-home">Retourner à la page principale</li>
      </NavLink>
    </section>
  );
};

export default Error404;

