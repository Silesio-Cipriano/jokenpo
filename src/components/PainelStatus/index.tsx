import React from "react";
import { RFValue } from 'react-native-responsive-fontsize';

import Papel from "../../assets/images/Papel.svg";
import Tesoura from "../../assets/images/Tesoura.svg";
import Pedra from "../../assets/images/Pedra.svg";


import {
  Container,
  EnemyStatus,
  Status,
  HandSelected
} from './styles'

type HandEnemy = {
  HandSelected: Number;
  dimensions: number;
}
export default function PainelStatus({ HandSelected,dimensions }: HandEnemy) {
  const hands =[Pedra,Papel,Tesoura];



  return (
    <Container>
      <EnemyStatus>
        { HandSelected==1 && <Papel width={RFValue(dimensions)}/>}
        { HandSelected==2 && <Pedra width={RFValue(dimensions)}/>}
        { HandSelected==3 && <Tesoura width={RFValue(dimensions)}/>}
      </EnemyStatus>
      <Status>
        Perdeu!
      </Status>
    </Container>
  )
}