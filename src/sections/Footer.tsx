import Link from "next/link";
import React from "react";

function Footer() {

  return (
    <footer>
      <Link
        href="https://github.com/OztrkEmirhan"
        target="_blank"
        className="footer-link"
      >
        <span className="footer-info">Frontend Emirhan Öztürk.</span>
      </Link>
    </footer>
  );
}

export default Footer;
