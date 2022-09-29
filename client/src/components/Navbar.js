import { Link } from "react-router-dom";
const Navbar = () => (
  <div className="navbar">
    <div className="container">
      <div className="logo">logo</div>
      <div className="links">
        <Link className="link" to="/?cat=art">
          <h6>ART</h6>
        </Link>
        <Link className="link" to="/?cat=technology">
          <h6>TECHNOLOGY</h6>
        </Link>
        <Link className="link" to="/?cat=movie">
          <h6>MOVIE</h6>
        </Link>
        <Link className="link" to="/?cat=design">
          <h6>DESIGN</h6>
        </Link>
        <Link className="link" to="/?cat=food">
          <h6>FOOD</h6>
        </Link>
        <span>Skyes</span>
        <span>Logout</span>
        <span className="write">
          <Link className="link" to="/write">
            Write
          </Link>
        </span>
      </div>
    </div>
  </div>
);

export default Navbar;
