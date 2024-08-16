import { FormGenerator } from "../../formGenerator/FormGenerator";
import { authFields } from "../configs/authConfig";
import { useRegisterUser } from "../../../hooks/useRegisterUser";
import { useCheckUser } from "../../../hooks/useCheckUser";
import { UserAuthCard } from "../../user/userAuthCard";

export const Auth = () => {
  const { handleSubmit } = useRegisterUser();
  const { isUserLoggedIn, getUserInfo, logOutUser } = useCheckUser();

  return (
    //FIXME: it should not be here
    <div>
      {isUserLoggedIn() ? (
        <UserAuthCard name={getUserInfo().name} logOut={logOutUser} />
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
