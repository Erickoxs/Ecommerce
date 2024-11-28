import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ background: "#333", color: "#fff", padding: "10px" }}>
      <nav>
        <Link to="/" style={{ margin: "0 15px", color: "#fff", textDecoration: "none" }}>
          Inicio
        </Link>
        <Link to="/login" style={{ margin: "0 15px", color: "#fff", textDecoration: "none" }}>
          Iniciar Sesión
        </Link>
        <Link to="/register" style={{ margin: "0 15px", color: "#fff", textDecoration: "none" }}>
          Registrarse
        </Link>
      </nav>
    </header>
  );
};

export default Header;