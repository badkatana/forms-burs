import { FormGenerator } from "components/formGenerator/FormGenerator";
import { authFields } from "../configs/authConfig";
import { useRegisterUser } from "hooks/user/useRegisterUser";
import { useCheckUser } from "hooks/user/useCheckUser";
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
    return <UserAuthCard />;
  }

  return (
    <FormGenerator
      fields={authFields}
      submitFunction={handleSubmit}
      formTitle="Registration"
    />
  );
};
