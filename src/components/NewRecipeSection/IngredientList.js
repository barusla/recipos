import {
  Text,
  VStack,
  StackDivider,
  HStack,
  IconButton,
  Spacer,
} from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";
import React from "react";

function IngredientList({ ingredients, removeIngredient }) {
  if (!ingredients.length) {
    return <Text p={4}>Add some ingredients below!</Text>;
  }
  return (
    <VStack
      m={4}
      borderColor='font'
      borderWidth='2px'
      borderRadius='lg'
      p={4}
      w='80%'
      divider={<StackDivider borderColor='font' />}
    >
      {ingredients.map((ing) => (
        <HStack w='100%' key={ing.id}>
          <Text>{ing.name} - </Text>
          <Text>
            {ing.amount}
            {ing.unit}
          </Text>
          <Spacer />
          <IconButton
            icon={<FaTrashAlt />}
            size='xs'
            onClick={() => removeIngredient(ing.id)}
          ></IconButton>
        </HStack>
      ))}
    </VStack>
  );
}

export default IngredientList;
