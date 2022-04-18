import {
  Text,
  VStack,
  StackDivider,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";
import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";

function DirectionstList({ directions, removeDirection, setDirections }) {
  if (!directions.length) {
    return <Text p={4}>Add some directions below!</Text>;
  }
  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(directions);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setDirections(items);
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId='directions'>
        {(provided) => (
          <VStack
            m={4}
            p={4}
            w='100%'
            divider={<StackDivider borderColor='font' />}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {directions.map((dir, idx) => (
              <Draggable key={dir.id} draggableId={dir.id} index={idx}>
                {(provided) => (
                  <HStack
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    w='100%'
                    key={dir.id}
                    justify='space-between'
                  >
                    <Text>
                      {idx + 1}. {dir.direction}
                    </Text>
                    <IconButton
                      icon={<FaTrashAlt />}
                      size='xs'
                      onClick={() => removeDirection(dir.id)}
                    ></IconButton>
                  </HStack>
                )}
              </Draggable>
            ))}
          </VStack>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default DirectionstList;
