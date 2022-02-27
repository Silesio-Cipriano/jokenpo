import React from 'react';
import { StatusBar } from 'react-native';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/styles/theme';
import Home from './src/screens/Home';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded]=useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  })

  if(!fontsLoaded){
     return <AppLoading/> 
  }

  return (
  <>
  <StatusBar hidden/>
  <ThemeProvider theme={theme}>
   <Home/>
  </ThemeProvider>
  </>
  );
}