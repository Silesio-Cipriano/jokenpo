import { RFPercentage,RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {Feather} from "@expo/vector-icons";

export const Container=styled.View `
    flex:1;
    background-color: ${({theme})=>theme.colors.background};
    padding:${RFPercentage(4)}px;
`;


export const Header = styled.View `
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  `


export const LeftHeader=styled.View``;

export const ButtonChangeTheme = styled.TouchableOpacity`
  flex-direction:row;
  background-color: ${({theme})=>theme.colors.buttonTheme};
  border-radius:20px;
  justify-content: space-between;
  width: ${RFValue(141)}px;
  height: ${RFValue(55)}px;
  align-items: center;
  padding:20px;
`;



export const SelectHand =styled.View `
  flex-direction: row;
  justify-content: space-between;
  margin-bottom:${RFPercentage(10)}px;
`
export const Button =styled.TouchableOpacity`
  margin:0 auto;
  background-color: ${({theme})=>theme.colors.button};
  justify-content: center;
  align-items: center;
  width: ${RFValue(288)}px;
  height: ${RFValue(67)}px;

  border-radius:${RFPercentage(20)}px;
`

export const TextButton= styled.Text  `
  color:white;
  font-family:${({theme})=>theme.fonts.bold};
  font-size: ${RFValue(18)}px;
`
export const TextStartGame=styled.Text`
  color:${({theme})=>theme.colors.secondary};
  font-family:${({theme})=>theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  text-align: center;
`;

export const LogoTitle=styled.Text`
margin-top:${RFPercentage(10)}px;
color:${({theme})=>theme.colors.secondary};
font-family:${({theme})=>theme.fonts.bold};
font-size: ${RFValue(48)}px;
text-align: center;
`;


export const LogoSlogan=styled.Text`
color:${({theme})=>theme.colors.text_color};
font-family:${({theme})=>theme.fonts.regular};
font-size: ${RFValue(24)}px;
text-align: center;
margin-bottom:${RFPercentage(5)}px;

`;




export const AppSignature=styled.Text`
margin-top:${RFPercentage(20)}px;
  color:${({theme})=>theme.colors.text_color};
  font-family:${({theme})=>theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  text-align: center;
`;
