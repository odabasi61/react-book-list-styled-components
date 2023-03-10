// theme provider context gibi kullanılır yani içeriğindekilere propsa gerek kalmadan ulaşabilmek için. themeprovider styled-componentsten import edilmeli. themeproviderı başka yerlerde de kullanabilmek için themeyi props olarak ekledik. bu sayede theme olarak belirlediğimiz css özellikleri her componente ulaşır. bunun için themeyi de ayrıca import ediyoruz.

import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "styled-components";
import { darktheme, lightheme } from "./styles/theme";
import { useEffect, useState } from "react";
// import { GlobalStyles } from "./styles/Global.styles";

function App() {
  const [myTheme, setMyTheme] = useState(
    sessionStorage.getItem("theme") || "light"
  ); //kullanıcı seçimi için. eğer başlangıçta storage da veri varsa onu getir yoksa light olarak initial değerini belirle
  const [themes, setThemes] = useState(lightheme); //Themeprovidera vereceğimiz theme statei. başlangiç  için lightheme yi tercih ettik

  useEffect(() => {
    sessionStorage.setItem("theme", myTheme); //kullanıcı refresh atsa bile theme seçimi değişmeyecek
    setThemes(myTheme === "light" ? lightheme : darktheme);
  }, [myTheme]); //myTheme değiştikçe storage ve themes güncellenecek. Böylelikle Themeprovidera verdiğimiz theme güncellenmiş olacak. Ve sayfa refresh olduğunda kullanıcın theme tercihi değişmemesi için storage da güncellenmiş oluyor.
  return (
    <ThemeProvider theme={themes}>
      {/* <GlobalStyles /> */}
      <AppRouter myTheme={myTheme} setMyTheme={setMyTheme} />
      {/* statelerimizi approuter aracılığıyla footer a yollayacağız */}
    </ThemeProvider>
  );
}

export default App;
