import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "../styles/FloatingBanner.css"; // Archivo de estilos para el banner
import { motion, AnimatePresence } from "framer-motion";
import imagenHorizontal from "../assets/images/israel.jpg";

const PopupBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const hasPopupCookie = Cookies.get("popupShown");
  let numerCont = 0;
  console.log("PopUp: ", hasPopupCookie);

  useEffect(() => {
    // Cerrar el banner automáticamente después de 3 segundos
    const timeout = setTimeout(() => {
      setIsVisible(false);
      Cookies.set("popupShown", "true", { expires: 365 }); // La cookie expira en 1 año
    }, 4000);

    // Limpia el temporizador cuando el componente se desmonta
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.div className="popup-banner">
            <motion.div className="popup-content">
              <motion.img
                src={imagenHorizontal}
                alt="Imagen Horizontal"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupBanner;

