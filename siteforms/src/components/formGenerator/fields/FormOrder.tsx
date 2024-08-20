import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { IFormFields } from "interfaces/IFormFields";
import { StyledDiv } from "./styles/FormOrderStyle";
import { onDragEndItem } from "components/lib/dragEventHandler";
import useOrderingOptions from "hooks/form/useOrderingOptions";
import { useFormContext } from "react-hook-form";

export const FormOrder = (props: IFormFields) => {
  const { options, name, label } = props;
  const { setValue, control } = useFormContext();

  const { currentOptions, setCurrentOptions } = useOrderingOptions(options!);

  const onDragEndOption = (result: any) => {
    const reorderedOptions = onDragEndItem(result, currentOptions);
    reorderedOptions && setCurrentOptions(reorderedOptions);
    setValue(name, reorderedOptions);
  };

  return (
    <div>
      <label>{label}</label>
      <DragDropContext onDragEnd={onDragEndOption}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <ul
              ref={provided.innerRef}
              {...provided.droppableProps}
              {...control}
            >
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
