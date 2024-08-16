import { RegistrationPage } from "pages/auth/registrationPage";
import { SingInPage } from "pages/auth/SignInPage";
import { LoadingPage } from "pages/loadingPage";
import { NewsPage } from "pages/newsPage";
import { QuestionnairePage } from "pages/questionnairePage";

export const authRoutes = [
  {
    path: "/news",
    Component: NewsPage,
  },
  {
    path: "/questionnaire",
    Component: QuestionnairePage,
  },
];

export const publicRoutes = [
  {
    path: "/registration",
    Component: RegistrationPage,
  },
  {
    path: "/signin",
    Component: SingInPage,
  },
  {
    path: "/*",
    Component: LoadingPage,
  },
];
