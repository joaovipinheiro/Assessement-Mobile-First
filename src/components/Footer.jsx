import React from "react";
import { Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer id="contato" className={styles.footer}>
      <div className={styles.socialLinks}>
        <a
          href="https://www.facebook.com"
          target="_blank"
          aria-label="Facebook"
        >
          <FacebookIcon />
        </a>
        <a href="https://www.twitter.com" target="_blank" aria-label="Twitter">
          <TwitterIcon />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          aria-label="Instagram"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </a>
      </div>
      <div className={styles.contactInfo}>
        <p>Email: contato@marcomadureira.com.br</p>
        <p>Telefone: (21) 00002-8922</p>
      </div>
      <Button
        variant="contained"
        color="primary"
        href="#contato"
        className={styles.contactButton} //  unico djeito de o botão funcionar foi assim
      >
        Fale Conosco
      </Button>
      <p className={styles.copyright}>© 2024 Marco Madureira para Prefeito</p>
    </footer>
  );
};

export default Footer;
