import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity ` 
  background-color: ${({theme})=>theme.colors.secondary};
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
  align-items: center;
  justify-content: center;
  border-radius:${RFPercentage(100)}px;

`