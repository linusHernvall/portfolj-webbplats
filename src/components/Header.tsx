import { NavLink } from "react-router-dom";

function Header() {
  
    // CSS ------------------------------------------------------------------------


    // Variabler / Functions ------------------------------------------------------
  
  
    // TSX ------------------------------------------------------------------------
  return (
    //Bakrundsfärgen är tillfällig. Ska tas bort senare.
    <header style={{ backgroundColor: "red" }}>
      <img src="/public/logo.png" alt="Eld´s Logo" />
      {/* Tillfälliga länkar för att byta sida. */}
      <br />
      <NavLink to="/">Home page</NavLink>
      <br />
      <NavLink to="/login">Login page</NavLink>
    </header>
  );
}

export default Header;
