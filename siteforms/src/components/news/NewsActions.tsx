import { FormGenerator } from "components/formGenerator/FormGenerator";
import { NewsFromCountry } from "../forms/configs/newsCountryConfig";

export const NewsActions = (props: { setCountry: (value: string) => void }) => {
  return (
    <FormGenerator
      fields={NewsFromCountry}
      submitFunction={(value: any) => props.setCountry(value.country)}
    />
  );
};
