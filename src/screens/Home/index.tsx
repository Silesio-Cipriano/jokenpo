import React from "react";
import Hand from "../../components/Hand";
import PainelStatus from "../../components/PainelStatus";
import StatusInfo from "../../components/StatusInfo";

import {
  Container, 
  Header, 
  LeftHeader,
  ButtonChangeTheme,
  Icon,
  SpaceIcon,
  SelectHand,
  Button,
  TextButton
} from "./styles";

export default function Home(){
  return (
    <Container>
      <Header>
        <LeftHeader>
          <StatusInfo/>
          <StatusInfo/>
        </LeftHeader>
        <ButtonChangeTheme>
          <SpaceIcon>
          <Icon name="sun"/>
          </SpaceIcon>
          <SpaceIcon>
          <Icon name="moon"/>
          </SpaceIcon>
        </ButtonChangeTheme>
      </Header>
      <PainelStatus HandSelected={3} dimensions={110}/>
      <SelectHand>
        <Hand/>
        <Hand/>
        <Hand/>
      </SelectHand>

      <Button>
        <TextButton>
        Reiniciar
        </TextButton>
      </Button>
    </Container>

  )
}