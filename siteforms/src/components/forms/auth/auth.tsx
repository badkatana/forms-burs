import { FormGenerator } from "../../formGenerator/FormGenerator";
import { authFields } from "../configs/authConfig";
import { useRegisterUser } from "hooks/useRegisterUser";
import { useCheckUser } from "hooks/useCheckUser";
import { UserAuthCard } from "../../user/userAuthCard";

export const Auth = (props: {
  handleRegistrationError: (error: any) => void;
}) => {
  const { handleSubmit, registrationError } = useRegisterUser();
  const { isUserLoggedIn, getUserInfo, logOutUser } = useCheckUser();

  if (registrationError !== null) {
    props.handleRegistrationError(registrationError);
  }

  if (isUserLoggedIn()) {
    return <UserAuthCard name={getUserInfo().name} logOut={logOutUser} />;
  }

  return (
    <FormGenerator
      fields={authFields}
      submitFunction={handleSubmit}
      formTitle="Registration"
    />
  );
};
