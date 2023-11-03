import { Starter } from './components/Starter'
import PopupBanner from "./components/BannerHome"
import { useEffect, useState } from 'react'
import { ScrollToTop } from './layout/ScrollToTop'
import { AppRouter } from './router/AppRouter'
import { ChangeFilterContext } from './context/FilterContext'
import { ChangeShowImgContext } from './context/ShowImgContext'

function App() {

  const [showPopupBanner, setShowPopupBanner] = useState(false);

  useEffect(() => {
    // Esperar un tiempo antes de mostrar el PopupBanner (por ejemplo, 6 segundos)
    const timeout = setTimeout(() => {
      setShowPopupBanner(true);
    }, 6000); // Ajusta el tiempo según tus necesidades

    // Limpia el temporizador cuando el componente se desmonta
    return () => {
      clearTimeout(timeout);
    };
  }, []);


  return (
    <>
      <ChangeFilterContext>
        <ChangeShowImgContext>
          <ScrollToTop>
                < Starter />
                {/* <PopupBanner/> */}
                {/* {showPopupBanner && <PopupBanner />} */}
                <AppRouter />
          </ScrollToTop>
        </ChangeShowImgContext>
      </ChangeFilterContext>
    </>
  )
}

export default App
