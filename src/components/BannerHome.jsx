import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "../styles/FloatingBanner.css"; // Archivo de estilos para el banner
import imagenHorizontal from "../assets/images/israel.jpg";

const PopupBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const hasPopupCookie = Cookies.get("popupShown");
      let numerCont = 0;
      console.log("PopUp: ", hasPopupCookie);

        useEffect(() => {
          setIsVisible(true);
          // Cerrar el banner automáticamente después de 3 segundos
          const timeout = setTimeout(() => {
            setIsVisible(false);
            Cookies.set("popupShown", "true", { expires: 365 }); // La cookie expira en 1 año
          }, 8000);
     
     
          // Limpia el temporizador cuando el componente se desmonta
          return () => {
            clearTimeout(timeout);
          };
                     }, []); 
                     
    const handleClose = () => {
      setIsVisible(false);
    };

      return isVisible ? (
        <div className="popup-banner">
          <div className="popup-content">
            <img src={imagenHorizontal} alt="Imagen Horizontal" /> {/* Agrega tu imagen aquí */}
            {/* <button className="close-button" onClick={handleClose}>
              X
            </button> */}
          </div>
        </div>
      ) : null;
    };
  
  export default PopupBanner;
