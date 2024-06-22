import { Outlet } from "react-router-dom";
import GlobalStyle from "../components/GlobalStyles";
import { ObjetiveQuestionsProvider } from "../providers/ObjetiveQuestionsProvider";
import { QuestionsProvider } from "../providers/QuestionsProvider";

const MoldPage = () => {
  return (
    <QuestionsProvider>
      <ObjetiveQuestionsProvider>
        <GlobalStyle />
        <Outlet />
      </ObjetiveQuestionsProvider>
    </QuestionsProvider>
  );
};

export default MoldPage;
