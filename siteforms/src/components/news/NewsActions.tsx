import { useNews } from "../../hooks/useNews";
import { FormGenerator } from "../formGenerator/FormGenerator";
import { NewsFromCountry } from "../forms/configs/newsCountryConfig";

export const NewsActions = (props: { setCountry: (value: string) => void }) => {
  const { setCountry } = useNews();

  const dubm = (data: any) => {
    setCountry(data.country);
  };

  return (
    <div>
      <FormGenerator
        fields={NewsFromCountry}
        submitFunction={(value: any) => props.setCountry(value.country)}
      />
      ;
    </div>
  );
};
