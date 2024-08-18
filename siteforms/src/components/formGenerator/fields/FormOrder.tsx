import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useEffect, useState } from "react";
import { FormFieldProps } from "interfaces/IFormFields";
import { StyledDiv } from "./styles/FormOrderStyle";
import { onDragEndItem } from "components/lib/dragEventHandler";

export const FormOrder = (props: FormFieldProps) => {
  const { options } = props.field;

  // this is to custom hook
  const [currentOptions, setCurrentOptions] = useState(options ? options : []);

  useEffect(() => {
    options && setCurrentOptions(options);
  }, [options]);

  const onDragEndOption = (result: any) => {
    const reorderedOptions = onDragEndItem(result, currentOptions);
    reorderedOptions && setCurrentOptions(reorderedOptions);
    props.setValue && props.setValue(props.field.name, reorderedOptions);
  };

  return (
    <div>
      <label>{props.field.label}</label>
      <DragDropContext onDragEnd={onDragEndOption}>
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
