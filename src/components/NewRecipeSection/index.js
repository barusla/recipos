import { useState, useEffect } from "react";
import {
  Heading,
  Input,
  VStack,
  Select,
  HStack,
  Container,
  Button,
  useToast,
} from "@chakra-ui/react";
import AddIngredient from "./AddIngredient";
import IngredientList from "./IngredientList";
import { API } from "../../config";
import axios from "axios";
import AddDirection from "./AddDirection";
import DirectionstList from "./DirectionsList";
import { ListTableStack, TableStackHeading } from "./AddRecipeElements";

function NewRecipeComponent() {
  const [ingredients, setIngredients] = useState([]);
  const [directions, setDirections] = useState([]);
  const toast = useToast();
  const [file, setFile] = useState("");

  function saveRecipe(e) {
    e.preventDefault();
    if (ingredients.length < 3) {
      toast({
        description: "Enter at least 3 ingredients!",
        status: "error",
        duration: 2000,
      });
    }
    let data = new FormData(e.target);
    data.append("image", file, file.name);
    data.append("user_id", "1");
    data.append("ingredients", JSON.stringify(ingredients));
    data.append("directions", JSON.stringify(directions));
    axios.post(`${API}recipes`, data);
  }

  function setStateDirections(directions) {
    setDirections(directions);
  }

  function addIngredient(ing) {
    setIngredients([...ingredients, ing]);
  }

  function addDirection(direction) {
    setDirections([...directions, direction]);
    console.log(directions);
  }

  function removeDirection(id) {
    const newDirections = directions.filter((direction) => {
      return direction.id !== id;
    });
    setDirections(newDirections);
  }

  function removeIngredient(id) {
    const newIngredients = ingredients.filter((ing) => {
      return ing.id !== id;
    });
    setIngredients(newIngredients);
  }

  return (
    <form id='recipeForm' onSubmit={saveRecipe}>
      <Container centerContent>
        <VStack
          p={4}
          alignItems='center'
          display='flex'
          justifyContent='center'
        >
          <Heading p={4} color='font'>
            Add your new recipe
          </Heading>
          <Input name='name' placeholder='Recipe name' required />
          <Input
            required
            pt={2}
            type='file'
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Select name='type' placeholder='Select type' required>
            <option value='soup'>soup</option>
            <option value='main dish'>main dish</option>
            <option value='dessert'>dessert</option>
          </Select>
          <ListTableStack>
            <TableStackHeading>Ingredients</TableStackHeading>
            <IngredientList
              ingredients={ingredients}
              removeIngredient={removeIngredient}
            />
            <AddIngredient addIngredient={addIngredient} />
          </ListTableStack>
          <ListTableStack>
            <TableStackHeading>Directions</TableStackHeading>
            <DirectionstList
              directions={directions}
              removeDirection={removeDirection}
              setDirections={setStateDirections}
            />
            <AddDirection addDirection={addDirection} />
          </ListTableStack>
        </VStack>
        <Button color='font' m={4} type='submit'>
          Save recipe
        </Button>
      </Container>
    </form>
  );
}

export default NewRecipeComponent;
