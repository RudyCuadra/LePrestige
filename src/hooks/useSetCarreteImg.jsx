/* Custom Hook que maneja el estado del slideshow de NewGallery.jsx */
import {  useState } from "react";
export default function useSetCarreteImg (initialState = 0){
  //const initialState = 0
  const [bigIMG, showBigIMG] = useState(initialState)

  return{bigIMG}

}
