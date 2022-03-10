import React from "react";

import { Container, Icon} from "./styles"


interface IconProps{
  icon:String,
  type:String
}

export default function ({icon,type}:IconProps) {
  return (
    <Container>
          <Icon name={icon} type={type}/>
    </Container>
  )
}