import { FormGenerator } from "../../formGenerator/FormGenerator";
import { authFields } from "../configs/authConfig";
import useRegisterUser from "../../../hooks/useRegisterUser";

export const Auth = () => {
  const { handleSubmit } = useRegisterUser();
  return (
    <FormGenerator
      fields={authFields}
      submitFunction={handleSubmit}
      formTitle="Registration"
    />
  );
};
