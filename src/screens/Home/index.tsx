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
          <StatusInfo value={5} name={"Vitorias"} />
          <StatusInfo value={2} name={"Derrotas"}/>
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
      <PainelStatus HandSelected={3} dimensions={120}/>
      <SelectHand>
        <Hand handSelected={1} dimensions={45}/>
        <Hand  handSelected={2} dimensions={45}/>
        <Hand  handSelected={3} dimensions={45}/>
      </SelectHand>

      <Button>
        <TextButton>
        Reiniciar
        </TextButton>
      </Button>
    </Container>

  )
}