// theme provider context gibi kullanılır yani içeriğindekilere propsa gerek kalmadan ulaşabilmek için.
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import AppRouter from "./router/AppRouter";



function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
