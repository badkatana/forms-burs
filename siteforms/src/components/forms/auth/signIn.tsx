import { useCheckUser } from "hooks/user/useCheckUser";
import { useRegisterUser } from "hooks/user/useRegisterUser";
import { FormGenerator } from "components/formGenerator/FormGenerator";
import { UserAuthCard } from "../../user/userAuthCard";
import { SignInConfig } from "../configs/signInConfig";
import { useNavigate } from "react-router-dom";

export const SignIn = (props: { handleError: (error: any) => void }) => {
  const { handleSignIn, signInError, isLoginSuccess } = useRegisterUser();
  const { isUserLoggedIn } = useCheckUser();
  const navigate = useNavigate();

  if (signInError !== null) {
    props.handleError(signInError);
  }

  if (isLoginSuccess) {
    navigate("/news");
  }
  if (isUserLoggedIn()) {
    return <UserAuthCard />;
  }

  return (
    <FormGenerator
      fields={SignInConfig}
      submitFunction={handleSignIn}
      formTitle="Sing In"
    />
  );
};
