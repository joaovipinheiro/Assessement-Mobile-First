import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer id="contato" className="footer">
      <div className="social-links">
        <a href="https://www.facebook.com" target="_blank">
          <FacebookIcon />
        </a>
        <a href="https://www.twitter.com" target="_blank">
          <XIcon />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <InstagramIcon />
        </a>
        <a href="https://www.linkedin.com" target="_blank">
          <LinkedInIcon />
        </a>
      </div>
      <div className="contact-info">
        <p>Email: contato@marcomadureira.com.br</p>
        <p>Telefone: (21) 0002-8922</p>
      </div>
      <p className="copyright">© 2024 Marco Madureira para Prefeito</p>
    </footer>
  );
};

export default Footer;
