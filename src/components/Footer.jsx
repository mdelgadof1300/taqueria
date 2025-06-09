// Footer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faTiktok,
  faDiscord,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 mt-10">
      <div className="flex justify-center space-x-4 mt-4">
        <a
          href="https://www.facebook.com/taqueriawesker"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://x.com/Taqueria_Wesker"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FontAwesomeIcon icon={faXTwitter} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/lataqueriadewesker/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a
          href="https://www.tiktok.com/@taqueriaweskeroficial"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FontAwesomeIcon icon={faTiktok} size="2x" />
        </a>
        <a
          href="https://discord.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FontAwesomeIcon icon={faDiscord} size="2x" />
        </a>
        <a
          href="https://discord.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
      </div>
      <p className="p-8">&copy; 2024 La Taquería de Wesker | Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
