import {
  HStack,
  Input,
  Select,
  Button,
  Container,
  useToast,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import React, { useState } from "react";

function AddIngredient({ addIngredient }) {
  const toast = useToast();

  function handleSubmit() {
    if (!name || !amount || !unit) {
      toast({
        description: "Invalid ingredient",
        status: "error",
        duration: 2000,
      });
    } else if (isNaN(amount)) {
      toast({
        description: "Amount has to be a number!",
        status: "error",
        duration: 2000,
      });
    } else if (name && amount && unit) {
      const ing = {
        id: nanoid(),
        name: name,
        amount: amount,
        unit: unit,
      };
      addIngredient(ing);
      setName("");
      setAmount("");
      setUnit("");
    }
  }

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [unit, setUnit] = useState("");

  return (
    <Container centerContent>
      <HStack w='100%'>
        <Input
          placeholder='Pick ingredient'
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Input
          w='50%'
          placeholder='Amount'
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <Select
          w='50%'
          placeholder='Unit'
          onChange={(e) => setUnit(e.target.value)}
          value={unit}
        >
          <option value='g'>g</option>
          <option value='ml'>ml</option>
          <option value='pc/s'>pc/s</option>
        </Select>
      </HStack>
      <Button mt={4} color='font' onClick={handleSubmit}>
        Add ingredient
      </Button>
    </Container>
  );
}

export default AddIngredient;
