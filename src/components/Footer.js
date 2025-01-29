import React from "react";
import "./Footer.css"; // Puedes agregar estilos específicos si es necesario.

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 VuelosLatinos. Todos los derechos reservados.</p>
        <p>Contacto: info@vueloslatinos.com</p>
        <div className="social-links">
        
        <a href="https://api.whatsapp.com/send?phone=5491132526174" target="_blank"
            className="social-links-whatsapp">
          </a>
          <a href="https://www.facebook.com/vueloslatinoscom" target="_blank"
            className="social-links-facebook">
          </a>
          <a href="https://www.instagram.com/vueloslatinosespana/" target="_blank"
           className="social-links-instagram">
           </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

//<div class="footer-content">
  //      <p>© 2025 VuelosLatinos. Todos los derechos reservados.</p>
    //    <p>Contacto: info@vueloslatinos.com</p>
      //  <div class="social-links">
//         <a target="_blank" 
  //        href="https://api.whatsapp.com/send?phone=5491132526174" 
    //      class="social-links-whatsapp"><i class="fa fa-whatsapp" aria-hidden="true"></i>
      //  </a>
//          <a target="_blank"
 //           href="https://www.facebook.com/vueloslatinoscom"
   //         class="social-links-facebook"
     //     ></a>

       //   <a target="_blank"
//            href="https://www.instagram.com/vueloslatinosespana/"
  //          class="social-links-instagram"
    //      ></a>
      //  </div>
  //    </div><a href="contacto.html">.</a>