import React from "react";
import Papel from "../../assets/images/Papel.svg";
import Tesoura from "../../assets/images/Tesoura.svg";
import Pedra from "../../assets/images/Pedra.svg";

import { RFValue } from "react-native-responsive-fontsize";

import {Container} from "./styles"


export default function Hand(){
  return (
    <Container>
        <Papel 
          height={RFValue(63)}
        />
    </Container>
  )
}