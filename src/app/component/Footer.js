import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {

  return (

    <div className="footerMain">
    <div className="container">
      <div className="homeBtn justify-content-center p-3">
        <a href="https://www.facebook.com/profile.php?id=100079673637881" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="homeIcon" />
        </a>
        <a href="https://www.instagram.com/faizan_mati/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="homeIcon" />
        </a>
        <a href="https://github.com/faizan-mati" target="_blank" rel="noopener noreferrer">
          <FaGithub className="homeIcon" />
        </a>
        <a href="https://www.linkedin.com/in/faizan-mati/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="homeIcon" />
        </a>
      </div>
    </div>
  </div>
  

  )
}