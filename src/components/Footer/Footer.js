import './Footer.scss'
import { IoLogoTwitter } from "react-icons/io";
import { BiLogoLinkedin } from "react-icons/bi"
import logo from '../../assets/logo/logo.png'

const Footer = () => {
  return (
    <footer>
      <div className='container-fluid'>
      <ul className='footer-links'>
      <li><a href='/#'>Products</a></li>
      <li><a href='/#'>Solutions</a></li>
      <li><a href='/#'>Resources</a></li>
      <li><a href='/#'>Info</a></li>
      <li><a href='/#'><IoLogoTwitter/> </a> <a href='/#'> <BiLogoLinkedin/></a></li>
      </ul>
      <div className='d-flex justify-content-center align-items-center mt-5'>
      <img src={logo} alt='logo' className='footer-logo'/><span> | All right reserved 2023</span>
      </div>
      </div>
    </footer>
  )
}

export default Footer
