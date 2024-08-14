import { Auth } from "../../components/forms/auth/auth";
import { BackgroundText, BlurredContainer } from "./StylesRegistration";

export const RegistrationPage = () => {
  return (
    <BackgroundText>
      <BlurredContainer>
        <Auth />
      </BlurredContainer>
    </BackgroundText>
  );
};
