import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav class="navbar bg-dark">
      <Link to="/" class="navbar-brand text-light">
        Ethnus
      </Link>
      <div class="nav ">
        {/* /home goes to the path which is defined on App.js page */}
        <Link to="/home" class="nav-link text-light">
          Home
        </Link>
        <Link to="/about" class="nav-link text-light">
          About
        </Link>
        <Link to="/blog" class="nav-link text-light">
          Blog
        </Link>
        <Link to="/contact" class="nav-link text-light">
          Contact
        </Link>
      </div>
    </nav>
  );
}
export default Nav;
