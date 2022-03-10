import React, { useEffect, useState,useContext } from "react";
import Hand from "../../components/Hand";
import PainelStatus from "../../components/PainelStatus";
import StatusInfo from "../../components/StatusInfo";
import themeDark from '../../global/styles/themeDark';

import Logo from "../../assets/images/Logo.svg"

import{useTheme} from '../../hooks/theme';


import {
  Container, 
  Header, 
  LeftHeader,
  ButtonChangeTheme,
  Icon,
  SpaceIcon,
  SelectHand,
  Button,
  TextButton,
  TextStartGame
} from "./styles";

export default function Home(){

  const {handleTheme} = useTheme();
  
  console.log(handleTheme);
  

  const [start,setStart]=useState(true); 
  const [select0,setSelect0]=useState(false); 
  const [select1,setSelect1]=useState(false); 
  const [select2,setSelect2]=useState(false); 
  const [handleResult,setHandleResult]=useState(-1);
  const [status,setStatus]=useState("");
  const [victory,setVictory]=useState(0);
  const [defeat,setDefeat]=useState(0);

  function clearStatus(){
    setStart(true);
  setSelect0(false); 
  setSelect1(false); 
  setSelect2(false); 
  setHandleResult(-1);
  setStatus("");
  setVictory(0);
  setDefeat(0);
  }
  let random=Math.floor(Math.random() * 2);

  function addVitory(){
    setVictory(victory+1);
  }
  function addDefeat(){
    setDefeat(defeat+1);
  }

  function handleSelected (hand:number){
    setStart(false);

  random=Math.floor(Math.random() * 2);
  setHandleResult(random);
   if(hand==0){
     if(random==1){
      addVitory();
      setStatus("Venceu!");
    }else if(hand==random){
      setStatus("Empate!");
    }else if(random==2){
      addDefeat();


      setStatus("Perdeu!");
    }
    setSelect0(true);
    setSelect1(false);
    setSelect2(false);
   
   }else if(hand==1){
    if(random==2){
      addVitory();

      setStatus("Venceu!");
    }else if(hand==random){
     
      setStatus("Empate!");
    }else if(random==0){
      addDefeat();
      setStatus("Perdeu!");
    }
    setSelect0(false);
    setSelect1(true);
    setSelect2(false);
   
   }else if(hand==2){
    if(random==0){
      addVitory();

      setStatus("Venceu!");
    }else if(hand==random){
      setStatus("Empate!");
    }else if(random==1){
      addDefeat();

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
        <ButtonChangeTheme onPress={handleTheme} >
          <SpaceIcon>
          <Icon name="sun"/>
          </SpaceIcon>
          <SpaceIcon>
          <Icon name="moon"/>
          </SpaceIcon>
        </ButtonChangeTheme>
      </Header>

      {start==true&&   <Logo height={205} align-items="center" width={300}/>}          

      {start==false&& <PainelStatus enemyHandSelected={handleResult} dimensions={120} statusSelected={status}/> }
      <SelectHand>
        <Hand handSelected={0} dimensions={45} selected={select0} onPress={()=>handleSelected(0)}/>
        <Hand  handSelected={1} dimensions={45} selected={select1} onPress={()=>{handleSelected(1)}}/>
        <Hand  handSelected={2} dimensions={45} selected={select2} onPress={()=>{handleSelected(2)}}/>
      </SelectHand>

      { start==true&& <TextStartGame >Selecione a mao para iniciar</TextStartGame>}
     { start==false&& <Button onPress={()=>clearStatus()}>
        <TextButton>
        Reiniciar
        </TextButton>
      </Button>}
    </Container>

  )
}