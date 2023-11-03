import PopupBanner from "../components/BannerHome"
import { HeroSlider } from "../components/HeroSlider"
import { Head } from "../layout/Head"
import { useEffect, useState } from 'react'
import "../styles/homePage.css"
import "../styles/index.css"

export const HomePage = () => {
    const [showPopupBanner, setShowPopupBanner] = useState(false);

    // useEffect(() => {
    //     const hasReloaded = sessionStorage.getItem('hasReloaded');
    //     if (hasReloaded) {
    //       // La página se ha recargado, espera 6 segundos antes de mostrar el PopupBanner
    //       const timeout = setTimeout(() => {
    //         setShowPopupBanner(true);
    //       }, 6000); // Ajusta el tiempo según tus necesidades
    
    //       // Limpia el temporizador cuando el componente se desmonta
    //       return () => {
    //         clearTimeout(timeout);
    //       };
    //     } else {
    //       // La página no se ha recargado, establece la bandera en sessionStorage
    //       sessionStorage.setItem('hasReloaded', 'true');
    //     }
    //   }, []);

    useEffect(() => {
        const hasReloaded = sessionStorage.getItem('hasReloaded');
        if (hasReloaded || !sessionStorage.getItem('hasVisited')) {
          // La página se ha recargado o es la primera vez que se carga, espera 6 segundos antes de mostrar el PopupBanner
          const timeout = setTimeout(() => {
            setShowPopupBanner(true);
          }, 5000); // Ajusta el tiempo según tus necesidades
    
          // Limpia el temporizador cuando el componente se desmonta
          return () => {
            clearTimeout(timeout);
          };
        } else {
          // La página no se ha recargado y ya ha sido visitada
          sessionStorage.setItem('hasReloaded', 'true');
        }
    
        // Marca la página como visitada
        sessionStorage.setItem('hasVisited', 'true');
      }, []);



    return (
        <>
            <Head title="Le Prestige" />
            <header>
                <HeroSlider />
                {showPopupBanner && <PopupBanner />}
            </header>
            
        </>
    )
}
