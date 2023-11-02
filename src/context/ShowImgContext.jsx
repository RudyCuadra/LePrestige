import { createContext, useState } from "react";

export const ShowImgContext = createContext();

export const ChangeShowImgContext =({children}) => {
  //const initialState = 0
  const [bigIMG, showBigIMG] = useState(0)

  return(
    <ShowImgContext.Provider value={{bigIMG, showBigIMG}}>
      {children}
    </ShowImgContext.Provider>
  )

}
