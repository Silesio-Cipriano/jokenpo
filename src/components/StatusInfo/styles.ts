import { RFValue } from "react-native-responsive-fontsize";
import styled  from "styled-components/native";


export const Container = styled.View `
   flex-direction: row;
`
export const NumberText=styled.Text `
  font-family:${({theme})=>theme.fonts.medium};
  font-size:${RFValue(18)}px;
  color:${({theme})=>theme.colors.text_color};
  padding-right:6px;
`

export const ResultText=styled.Text `
  font-family:${({theme})=>theme.fonts.bold};
  color:${({theme})=>theme.colors.text_color};
  font-size:${RFValue(18)}px;
`
