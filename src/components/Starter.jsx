//import LePrestigeLogoAnimated from "../assets/LePrestigeLogoAnimated"
import React, { useState, useEffect } from "react";
import PopupBanner from "../components/BannerHome"
import { motion } from "framer-motion"
import "../styles/animations.css"
import LePrestigeNewLogoAnimated from "../assets/LePrestigeNewLogoAnimated"
export const Starter = () => {

  const [animationComplete, setAnimationComplete] = useState(false);

  // Función que se ejecuta al completarse la animación
  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    // Simula la duración de la animación (ajusta la duración según tu animación)
    const animationDuration = 3000; // 6 segundos

    const animationTimeout = setTimeout(handleAnimationComplete, animationDuration);

    // Limpia el temporizador cuando el componente se desmonta
    return () => {
      clearTimeout(animationTimeout);
    };
  }, []);



  return (
    <div>
    <motion.div className="animation--container"
      initial={{
        opacity: 1,
        display: "flex",
        alignSelf:"center",
        justifySelf:"center",
        width:"100%",
        height:"100vh",
        position:"absolute",
        top:0,
        bottom:0,
        left:0,
        right:0,
        margin:"auto",
        zIndex:"999",
        background:"white"
      }}
      transition={{
        duration: 6
      }}
      animate={{
        opacity: [1, 1, 1, 1, 1, 1, 0],
            transitionEnd: {
      display: "none",
    }
      }}
      onAnimationComplete={handleAnimationComplete}
    >
      <LePrestigeNewLogoAnimated />
    </motion.div>

      {animationComplete && <PopupBanner />}
    </div>
  )
}
