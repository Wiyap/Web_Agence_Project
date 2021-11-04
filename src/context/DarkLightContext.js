import React, { createContext, useEffect, useState } from 'react';

export const DarkLightContext = createContext()

const DarkLightContextProvider = (props) => {
  let storedTheme = localStorage.theme === "false" ? false : true

  const [darkLight, setDarkLight] = useState(storedTheme)

  const toggleTheme = (e) => {
    localStorage.theme = !darkLight
    setDarkLight(!darkLight)
  }

  return(
    <DarkLightContext.Provider value={{darkLight, toggleTheme}}>
      <div className={darkLight? "bg-light text-dark App" : "bg-dark text-light App" }>
        {props.children}
      </div>
    </DarkLightContext.Provider>
  )
}

export default DarkLightContextProvider