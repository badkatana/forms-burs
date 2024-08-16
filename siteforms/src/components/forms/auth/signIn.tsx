import useRegisterUser from "../../../hooks/useRegisterUser";
import { FormGenerator } from "../../formGenerator/FormGenerator";
import { SignInConfig } from "../configs/signInConfig";

export const SignIn = () => {
  const { handleSignIn } = useRegisterUser();

  return (
    <FormGenerator
      fields={SignInConfig}
      submitFunction={handleSignIn}
      formTitle="Sing In"
    />
  );
};
