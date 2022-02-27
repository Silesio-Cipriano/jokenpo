import { RFPercentage,RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container=styled.View `
    flex:1;
    background-color: ${({theme})=>theme.color.background};
    padding:${RFPercentage(4)}px;
`;

export const ResultText=styled.Text `
  font-family:${({theme})=>theme.fonts.bold};
  font-size:18px;
`

export const Header = styled.View `
  flex-direction: row;
`

export const ChangeTheme = styled

 