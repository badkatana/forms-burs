import { Box, Button } from "@mui/material";
import { CSSProperties } from "react";
import { SubmitButton } from "./formGeneratorStyles";

interface ButtonProps {
  text: string;
  link: string;
  style?: CSSProperties;
}

type FormButtonsProps = {
  buttons?: ButtonProps[];
};

export const FormGeneratorButtons = (props: FormButtonsProps) => {
  return (
    <Box>
      <SubmitButton type="submit">Submit</SubmitButton>
      {props.buttons != null ??
        props.buttons?.map((button, index) => (
          <Button
            key={index}
            href={button.link}
            variant="contained"
            style={button.style}
            component="a"
          >
            {button.text}
          </Button>
        ))}
    </Box>
  );
};
