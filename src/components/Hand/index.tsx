import React from "react";
import Papel from "../../assets/images/Papel.svg";
import Tesoura from "../../assets/images/Tesoura.svg";
import Pedra from "../../assets/images/Pedra.svg";

import { RFValue } from "react-native-responsive-fontsize";

import {Container} from "./styles"

type HandEnemy = {
  handSelected: Number;
  dimensions: number;
}

export default function Hand({handSelected,dimensions}:HandEnemy){
  return (
    <Container>
      { handSelected==1 && <Papel 
          height={RFValue(dimensions)}
        />}
        { handSelected==2 && <Pedra 
          height={RFValue(dimensions)}
        />}
        { handSelected==3 && <Tesoura 
          height={RFValue(dimensions)}
        />}
    </Container>
  )
}