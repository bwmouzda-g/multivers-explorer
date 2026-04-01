
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const { pathname } = useLocation();
  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        MULTIVERS <span>EXPLORER</span>
      </Link>
      {pathname !== "/" && (
        <Link to="/" className="navbar-back">← Retour</Link>
      )}
    </header>
  );
}

export default NavBar;
