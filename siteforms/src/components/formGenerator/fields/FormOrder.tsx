import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useEffect, useState } from "react";
import { FormFieldProps } from "interfaces/IFormFields";
import { StyledDiv } from "./styles/FormOrderStyle";

export const FormOrder = (props: FormFieldProps) => {
  const { options } = props.field;

  const [currentOptions, setCurrentOptions] = useState(
    props.field.options ? props.field.options : []
  );

  useEffect(() => {
    setCurrentOptions(options!);
  }, [options]);
  // fixme: this should not be here
  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const reorderedOptions = Array.from(currentOptions!);
    const [removed] = reorderedOptions.splice(result.source.index, 1);
    reorderedOptions.splice(result.destination.index, 0, removed);

    setCurrentOptions(reorderedOptions);
    props.setValue && props.setValue(props.field.name, reorderedOptions);
  };

  return (
    <div>
      <label>{props.field.label}</label>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <ul ref={provided.innerRef} {...provided.droppableProps}>
              {currentOptions!.map((option, index) => (
                <Draggable
                  key={option.value}
                  draggableId={option.value}
                  index={index}
                >
                  {(provided) => (
                    <StyledDiv
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {option.label}
                    </StyledDiv>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
