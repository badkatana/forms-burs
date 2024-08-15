import { FormGenerator } from "../../formGenerator/FormGenerator";
import { authFields } from "../configs/authConfig";
import useRegisterUser from "../../../hooks/useRegisterUser";
import { useCheckUser } from "../../../hooks/useCheckUser";
import { Button } from "@mui/material";

export const Auth = () => {
  const { handleSubmit } = useRegisterUser();
  const { isUserLoggedIn, getUserInfo, logOutUser } = useCheckUser();

  // FIXME: перенести как отдельный компонент в том случае, если user уже вошёл. Не оставлять так

  return (
    <div>
      {isUserLoggedIn() ? (
        <div>
          <div>Вы уже вошли как {getUserInfo().name}</div>
          <Button onClick={() => logOutUser()}>Выйти</Button>
        </div>
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
