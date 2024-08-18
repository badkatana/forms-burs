import { useState } from "react";

const useOrderingOptions = (props: any[]) => {
  const [currentOptions, setCurrentOptions] = useState(props ? props : []);

  return { currentOptions, setCurrentOptions };
};

export default useOrderingOptions;
