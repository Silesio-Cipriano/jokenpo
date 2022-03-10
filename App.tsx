import React, {useState} from 'react';
import { StatusBar } from 'react-native';
import lightTheme from './src/global/styles/themeLight';
import Home from './src/screens/Home';

import {MyThemeProvider} from './src/hooks/theme'


import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import AppLoading from 'expo-app-loading';

export default function App() {
  const tema=useState(lightTheme);

 
  const [fontsLoaded]=useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if(!fontsLoaded){
     return <AppLoading/> 
  }

  return (
  <>
  <StatusBar hidden/>
   <MyThemeProvider>
         <Home/>
   </MyThemeProvider>
   
  </>
  );
}