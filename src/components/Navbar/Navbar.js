import './Navbar.scss'
import logo from '../../assets/logo/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary shadow-sm">
    <div className="container-sm">
      <a className="navbar-brand" href="/#"><img src={logo} alt='logo' className='nav-logo'/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#contact">Pricing</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="/#kb">Features</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="/#contact">Contact Us</a>
      </li>
        </ul>
        <div className="d-flex">
          <button className="btn app__nav-btn rounded-pill px-4 py-2 shadow-sm" type="submit">Login</button>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
