import { Input, Button, Container } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import React, { useState } from "react";

function AddDirection({ addDirection }) {
  const [direction, setDirection] = useState("");

  function handleSubmit() {
    const newDirection = {
      id: nanoid(),
      direction: direction,
    };
    addDirection(newDirection);
    setDirection("");
  }

  return (
    <Container centerContent>
      <Input
        placeholder='Enter direction'
        onChange={(e) => setDirection(e.target.value)}
        value={direction}
      />
      <Button mt={4} color='font' onClick={handleSubmit}>
        Add direction
      </Button>
    </Container>
  );
}

export default AddDirection;
