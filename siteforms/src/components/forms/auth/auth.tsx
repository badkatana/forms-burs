import { FormGenerator } from "../../formGenerator/FormGenerator";
import { authFields } from "../configs/authConfig";
import useRegisterUser from "../../../hooks/useRegisterUser";
import { useCheckUser } from "../../../hooks/useCheckUser";

export const Auth = () => {
  const { handleSubmit } = useRegisterUser();
  const { isUserLoggedIn, getUserInfo } = useCheckUser();

  return (
    <div>
      {isUserLoggedIn() ? (
        <div>Вы уже вошли как {getUserInfo()}</div>
      ) : (
        <FormGenerator
          fields={authFields}
          submitFunction={handleSubmit}
          formTitle="Registration"
        />
      )}
    </div>
  );
};
