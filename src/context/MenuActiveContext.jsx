import { createContext, useEffect, useState } from "react";

export const MenuActiveContext = createContext();

// eslint-disable-next-line react/prop-types
export const ChangeMenuActiveContext = ({ children }) => {

    // Abre/Cierra el menu Global
    const [miniMenu, openMiniMenu] = useState(false)
    // Abre/Cierra el menu de servicios
    const [servicesSubMenu, openServicesMenu] = useState(false)
    // Abre/Cierra el menu de Construccion
    const [constructionMenu, openConstructionMenu] = useState(false)
    // Contiene el ancho de la pantalla actual
    const [widthSize, setWindowsSize] = useState(getWidthSize())

    useEffect(() => {
        function handleWidthSize() {
            setWindowsSize(getWidthSize())
        }

        window.addEventListener('resize', handleWidthSize)
        // Limpiar componente
        return () => {
            window.removeEventListener('resize', handleWidthSize)
        }
    }, [])

    // Si la pantalla es menor a 700px es true
    let isIpadWidth = widthSize <= 820
    let isMobileWidth = widthSize <= 700
    const isFullWidth = widthSize <= 1920; // 1920 es un ejemplo, cambia esto al ancho de tu computadora

    //console.log("IPAD:",isIpadWidth)
    function getWidthSize() {
        const { innerWidth } = window
        return innerWidth
    }

    return (
        <MenuActiveContext.Provider value={
            {
                miniMenu,
                openMiniMenu,
                constructionMenu,
                openConstructionMenu,
                servicesSubMenu,
                openServicesMenu,
                isMobileWidth,
                isIpadWidth,
                isFullWidth
            }
        }>
            {children}
        </MenuActiveContext.Provider>
    )
}
