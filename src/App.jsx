import { AppTheme } from "./theme";
import { AppRouter } from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";
export const App = () => {
  return (
    <AppTheme>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AppTheme>
  );
};
