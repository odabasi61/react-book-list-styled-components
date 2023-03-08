// theme provider context gibi kullanılır yani içeriğindekilere propsa gerek kalmadan ulaşabilmek için. themeprovider styled-componentsten import edilmeli. themeproviderı başka yerlerde de kullanabilmek için themeyi props olarak ekledik. bu sayede theme olarak belirlediğimiz css özellikleri her componente ulaşır. bunun için themeyi de ayrıca import ediyoruz.

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
