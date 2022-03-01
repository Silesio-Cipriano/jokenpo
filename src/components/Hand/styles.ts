import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


type HandEnemy = {
  handSelected: Number;
  dimensions: number;
  selected :boolean;
  onPress: ()=>void;
}

export const Container = styled.TouchableOpacity<HandEnemy>` 
  background-color: ${({theme,selected})=> selected? theme.colors.secondary:theme.colors.background};
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
  align-items: center;
  justify-content: center;
  border-radius:${RFPercentage(100)}px;

`