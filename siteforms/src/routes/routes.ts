import { AuthPage } from "../pages/authPage";
import { LoadingPage } from "../pages/loadingPage";
import { NewsPage } from "../pages/newsPage";
import { QuestionnairePage } from "../pages/questionnairePage";

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
    path: "/",
    Component: AuthPage,
  },
  {
    path: "/401",
    Component: LoadingPage,
  },
];
