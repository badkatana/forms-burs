import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useEffect, useState } from "react";
import { IFormFields } from "../../../interfaces/IFormFields";

interface FormOrderProps {
  field: IFormFields;
  control: any;
  setValue: (name: string, value: any) => void;
  getValue: (name: string) => any;
}

export const FormOrder = (props: FormOrderProps) => {
  const { options } = props.field;

  const [currentOptions, setCurrentOptions] = useState(props.field.options!);

  useEffect(() => {
    setCurrentOptions(options!);
  }, [options]);

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const reorderedOptions = Array.from(currentOptions!);
    const [removed] = reorderedOptions.splice(result.source.index, 1);
    reorderedOptions.splice(result.destination.index, 0, removed);

    setCurrentOptions(reorderedOptions);
    props.setValue(props.field.name, reorderedOptions);
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
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        ...provided.draggableProps.style,
                        padding: "8px",
                        margin: "4px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        backgroundColor: "#fff",
                      }}
                    >
                      {option.label}
                    </li>
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
