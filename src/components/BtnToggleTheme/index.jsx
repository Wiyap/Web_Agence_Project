import React, {useContext} from 'react';
import { DarkLightContext } from 'context/DarkLightContext';

const BtnToggleTheme = () => {
  const {toggleTheme, darkLight} = useContext(DarkLightContext)

  return(
    <button className={darkLight ? "btn btn-dark" : "btn btn-light"} onClick={toggleTheme}>{darkLight ? 'Dark' : 'Light'} theme</button>
  )
}


export default BtnToggleTheme