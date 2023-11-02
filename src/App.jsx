import { Starter } from './components/Starter'
import { useEffect, useState } from 'react'
import { ScrollToTop } from './layout/ScrollToTop'
import { AppRouter } from './router/AppRouter'
import { ChangeFilterContext } from './context/FilterContext'
import { ChangeShowImgContext } from './context/ShowImgContext'

function App() {
  return (
    <>
      <ChangeFilterContext>
        <ChangeShowImgContext>
          <ScrollToTop>
                < Starter />
                <AppRouter />
          </ScrollToTop>
        </ChangeShowImgContext>
      </ChangeFilterContext>
    </>
  )
}

export default App
