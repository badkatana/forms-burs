import { FormGenerator } from "components/formGenerator/FormGenerator";
import { authFields } from "../configs/authConfig";
import { useRegisterUser } from "hooks/user/useRegisterUser";
import { useCheckUser } from "hooks/user/useCheckUser";
import { UserAuthCard } from "../../user/userAuthCard";
import { useNavigate } from "react-router-dom";

export const Auth = (props: {
  handleRegistrationError: (error: any) => void;
}) => {
  const { handleSubmit, registrationError, isRegistrationSuccess } =
    useRegisterUser();
  const { isUserLoggedIn } = useCheckUser();
  const navigate = useNavigate();

  if (isRegistrationSuccess) {
    navigate("/news");
  }
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
