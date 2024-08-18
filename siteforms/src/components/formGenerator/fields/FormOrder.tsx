import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { FormFieldProps } from "interfaces/IFormFields";
import { StyledDiv } from "./styles/FormOrderStyle";
import { onDragEndItem } from "components/lib/dragEventHandler";
import useOrderingOptions from "hooks/useOrderingOptions";

export const FormOrder = (props: FormFieldProps) => {
  const { options } = props.field;

  const { currentOptions, setCurrentOptions } = useOrderingOptions(options!);

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
