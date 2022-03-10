import React, {createContext, ReactNode, useContext, useState} from 'react';
import {ThemeProvider} from 'styled-components';
import themeDark from '../global/styles/themeDark';
import themeLight from '../global/styles/themeLight';

interface Theme{ 
    colors: {
        background: string;
        primary: string;
        secondary: string;
        button: string;
        text_color: string;
        text_win: string;
        buttonTheme: string;
    };
    fonts: {
        regular: string;
        medium: string;
        bold: string;
    }
}

interface IThemeContextData{
  theme:Theme,
  handleTheme:() =>void;
}




interface  themeProviderProps{
  children:ReactNode
}

const ThemeContext= createContext({} as IThemeContextData);
function MyThemeProvider({children}:themeProviderProps){
  const [themeMode,setThemeMode]=useState(themeLight);
 
  function handleTheme(){
  
    setThemeMode(themeMode===themeLight? themeDark:themeLight);
  }

  return (
    <ThemeContext.Provider value ={{
      theme:themeMode,
      handleTheme,
    }}>
    <ThemeProvider theme={themeMode}>
      {children}
    </ThemeProvider>
  </ThemeContext.Provider>
  )
}

function useTheme(){
  const context=useContext(ThemeContext);
  return context;
}

export {MyThemeProvider,useTheme};

