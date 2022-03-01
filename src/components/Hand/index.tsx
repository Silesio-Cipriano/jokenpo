import React,{useState} from "react";
import Papel from "../../assets/images/Papel.svg";
import Tesoura from "../../assets/images/Tesoura.svg";
import Pedra from "../../assets/images/Pedra.svg";

import { RFValue } from "react-native-responsive-fontsize";

import {Container} from "./styles"

type HandEnemy = {
  handSelected: Number;
  dimensions: number;
  selected :boolean;
  onPress: ()=>void;
}

export default function Hand({handSelected,dimensions, selected,onPress}:HandEnemy){
 
  return (
    <Container handSelected={handSelected} dimensions={dimensions} selected ={selected} onPress={onPress} >
      { handSelected==0 && <Papel 
          height={RFValue(dimensions) }
        /> }
        { handSelected==1 && <Pedra 
          height={RFValue(dimensions)}
        />}
        { handSelected==2 && <Tesoura 
          height={RFValue(dimensions)}
        />}
    </Container>
  )
}