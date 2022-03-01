import React, { useEffect, useState } from "react";
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

  const [select0,setSelect0]=useState(false); 
  const [select1,setSelect1]=useState(false); 
  const [select2,setSelect2]=useState(false); 
  const [handleResult,setHandleResult]=useState(-1);
  const [status,setStatus]=useState("");
  const [victory,setVictory]=useState(0);
  const [defeat,setDefeat]=useState(0);

  function clearStatus(){
    
  setSelect0(false); 
  setSelect1(false); 
  setSelect2(false); 
  setHandleResult(-1);
  setStatus("");
  setVictory(0);
  setDefeat(0);
  }
  let random=Math.floor(Math.random() * 2);


  function handleSelected (hand:number){

  random=Math.floor(Math.random() * 2);
  setHandleResult(random);
   if(hand==0){
     if(random==1){
      setStatus("Venceu!");
      setVictory(victory+1);
    }else if(hand==random){
      setStatus("Empate!");
    }else if(random==2){
      setDefeat(defeat+1);

      setStatus("Perdeu!");
    }
    setSelect0(true);
    setSelect1(false);
    setSelect2(false);
   
   }else if(hand==1){
    if(random==2){
      setVictory(victory+1);
      
      setStatus("Venceu!");
    }else if(hand==random){
     
      setStatus("Empate!");
    }else if(random==0){
      setDefeat(defeat+1);

      setStatus("Perdeu!");
    }
    setSelect0(false);
    setSelect1(true);
    setSelect2(false);
   
   }else if(hand==2){

    if(random==0){
      setVictory(victory+1);

      setStatus("Venceu!");
    }else if(hand==random){
     
      setStatus("Empate!");
    }else if(random==1){
      setDefeat(defeat+1);
      

      setStatus("Perdeu!");
    }
    setSelect0(false);
    setSelect1(false);
    setSelect2(true);
   
   }


  }

  return (
    <Container>
      <Header>
        <LeftHeader>
          <StatusInfo value={victory} name={"Vitorias"} />
          <StatusInfo value={defeat} name={"Derrotas"}/>
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
      <PainelStatus enemyHandSelected={handleResult} dimensions={120} statusSelected={status}/>
      <SelectHand>
        <Hand handSelected={0} dimensions={45} selected={select0} onPress={()=>handleSelected(0)}/>
        <Hand  handSelected={1} dimensions={45} selected={select1} onPress={()=>{handleSelected(1)}}/>
        <Hand  handSelected={2} dimensions={45} selected={select2} onPress={()=>{handleSelected(2)}}/>
      </SelectHand>

      <Button onPress={()=>clearStatus()}>
        <TextButton>
        Reiniciar
        </TextButton>
      </Button>
    </Container>

  )
}