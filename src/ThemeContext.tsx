import {createContext} from 'react';

interface themeAuth{
  theme:{
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
}


const ThemeContext= createContext({} as themeAuth);

export default ThemeContext;

