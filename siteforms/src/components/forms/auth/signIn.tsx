import { useCheckUser } from "hooks/useCheckUser";
import { useRegisterUser } from "hooks/useRegisterUser";
import { FormGenerator } from "../../formGenerator/FormGenerator";
import { UserAuthCard } from "../../user/userAuthCard";
import { SignInConfig } from "../configs/signInConfig";

export const SignIn = (props: { handleError: (error: any) => void }) => {
  const { handleSignIn, signInError } = useRegisterUser();
  const { getUserInfo, logOutUser, isUserLoggedIn } = useCheckUser();

  if (signInError !== null) {
    props.handleError(signInError);
  }

  if (isUserLoggedIn()) {
    return <UserAuthCard name={getUserInfo().name} logOut={logOutUser} />;
  }

  return (
    <FormGenerator
      fields={SignInConfig}
      submitFunction={handleSignIn}
      formTitle="Sing In"
    />
  );
};
