import React, { useState } from "react";
import { RFValue } from 'react-native-responsive-fontsize';

import Papel from "../../assets/images/Papel.svg";
import Tesoura from "../../assets/images/Tesoura.svg";
import Pedra from "../../assets/images/Pedra.svg";


import {
  Container,
  EnemyStatus,
  Status,
} from './styles'

type HandEnemy = {
  enemyHandSelected: number;
  dimensions: number;
  statusSelected:String;
}
export default function PainelStatus({ enemyHandSelected,dimensions, statusSelected}: HandEnemy) {
  console.log("recebi isso: "+enemyHandSelected);
  return (
    <Container>
      {enemyHandSelected!=-1 &&
      <EnemyStatus>
        { enemyHandSelected==0 && <Papel width={RFValue(dimensions)}/> }
        {enemyHandSelected==1 && <Pedra width={RFValue(dimensions)}/>}
     {   enemyHandSelected==2 && <Tesoura width={RFValue(dimensions)}/>}
      </EnemyStatus>}
      <Status>
        {statusSelected}
      </Status>
    </Container>
  )
}