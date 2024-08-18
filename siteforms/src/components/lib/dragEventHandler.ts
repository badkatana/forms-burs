// why currentOptions is any:  not only form components can be dnd in the future.

export const onDragEndItem = (
  result: {
    destination: { index: number };
    source: { index: number };
  },
  currentOptions: any[]
) => {
  if (!result.destination) return;
  console.log(result);

  const reorderedOptions = Array.from(currentOptions!);
  const [removed] = reorderedOptions.splice(result.source.index, 1);
  reorderedOptions.splice(result.destination.index, 0, removed);
  return reorderedOptions;
};
