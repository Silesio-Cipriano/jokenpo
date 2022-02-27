 import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

 export const Container= styled.View `
  margin:0 auto;
  margin-top:${RFPercentage(5)}px;
  align-items: center;
 `

 export const  EnemyStatus= styled.View `
  justify-content: center;
  align-items: center;
  background-color: ${({theme})=>theme.colors.primary};
  width: ${RFValue(208)}px;
  height: ${RFValue(208)}px;
  padding:${RFValue(20)}px;
  border-radius:${RFPercentage(100)}px;
 `
 export const Status= styled.Text`
  font-size:${RFValue(26)}px;
  font-family: ${({theme})=>theme.fonts.bold};
  color:${({theme})=>theme.colors.text_color};
  margin-top:${RFPercentage(3)}px;
  margin-bottom:${RFPercentage(4)}px;
 `

type HandEnemy = {
  HandSelected: React.ComponentType
}

 export const HandSelected = styled.View<HandEnemy>`
 
 `;