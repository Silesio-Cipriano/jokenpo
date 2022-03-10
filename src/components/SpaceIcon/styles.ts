import { RFValue } from "react-native-responsive-fontsize";
import styled  from "styled-components/native";
import {Feather} from "@expo/vector-icons";


interface IconProps{
  icon:String
  type:String
}

export const Container = styled.View `
   flex-direction: row;
`
export const Icon=styled(Feather) `
  font-size:${RFValue(24)}px;
  color:${({theme})=>  theme.colors.secondary};
`

