import React from "react";

function Footer() {
  return (
    <footer>
      <div className="socials">
        <a href="https://www.facebook.com/jorislowi" target="_blank">
          <img className="img-dfinity" src="/icon-facebook.svg" alt="facebook" />
        </a>
        <a href="https://twitter.com/jleuwe" target="_blank">
          <img className="img-dfinity" src="/icon-x.svg" alt="x" />
        </a>
        <a href="https://www.instagram.com/jorstloyi/" target="_blank">
          <img className="img-dfinity" src="/icon-instagram.svg" alt="instagram" />
        </a>
      </div>
      <span className="copyright">Jurris of Earth | 2024</span>
    </footer>
  );
}

export default Footer;
