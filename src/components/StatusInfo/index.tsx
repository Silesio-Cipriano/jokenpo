import React from "react";

import { Container, NumberText, ResultText } from "./styles"

type statusProps = {
  name: String;
  value:number
}

export default function ({value, name }: statusProps) {
  return (
    <Container>
     {value >0 &&
     <>
      <NumberText>
        {value}
      </NumberText>

      <ResultText>
        {name}
      </ResultText>
      </>
    }
    </Container>
  )
}