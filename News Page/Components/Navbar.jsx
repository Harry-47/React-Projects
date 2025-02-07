const Navbar = ({setCategory, category}) => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <a className={`nav-link bg-dark rounded ${category === "Home" ? "active" : ""}`} onClick={()=>setCategory("technology")} aria-current="page" href="#">Technology</a>
        </li>
        <li className="nav-item bg-dark rounded mx-2">
          <a className={`nav-link ${category === "" ? "active" : ""}`} onClick={()=> setCategory("business")}href="#">Business</a>
        </li>
        <li className="nav-item bg-dark rounded mx-2">
          <a className="nav-link" onClick={()=> setCategory("health")} href="#">Health</a>
        </li>
        <li className="nav-item bg-dark rounded mx-2">
          <a className="nav-link" onClick={()=> setCategory("sports")}href="#">Sports</a>
        </li>
        <li className="nav-item bg-dark rounded mx-2">
          <a className="nav-link" onClick={()=> setCategory("entertainment")} href="#">Entertainment</a>
        </li>
        <li className="nav-item bg-dark rounded mx-2">
          <a className="nav-link" onClick={()=> setCategory("general")} href="#">General</a>
        </li>
        <li className="nav-item bg-dark rounded mx-2">
          <a className="nav-link" onClick={()=> setCategory("science")} href="#">Science</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    )
}
export default Navbar;