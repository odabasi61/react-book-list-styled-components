// burası yönlendirme sayfamız.
// globalstyles burada çağrıldı. böylece içindeki css özellikleri heryere aktarılabilir.

import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { GlobalStyles } from "../styles/Global.styles";
import Footer from "../components/footer/Footer";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRouter from "./PrivateRouter";
import Detail from "../pages/detail/Detail";
import About from "../pages/about/About";

const AppRouter = () => {
  // current user state burada oluşturuldu. böylece ilgili componentlere burdan yani parent dan gönderilebilir. navbara ve logine burdan gönderdik.

  const [currentUser, setCurrentUser] = useState(
    sessionStorage.getItem("user")
  );
  return (
    <BrowserRouter>
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setCurrentUser={setCurrentUser} />}
        />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/about" element={<PrivateRouter />}>
          <Route path="" element={<About />} />
        </Route>
        <Route path="/detail" element={<PrivateRouter />}>
          <Route path="" element={<Detail />} />
        </Route> */}

        {/* kullanıcı girişi yapılarak erişilebilen sayfalar. yukarıda ayrı ayrı yönlendirilişleri var. mesela about kısmına gidebilmek için önce privateroutera gidip oradan yönlendiriliniyor. detail kısmı da öyle. ayrı ayrı yazmak yerine aşağıdaki gibi ikisini aynı yere yazdık. ancak birlikte yazabilmemzin nedeni her ikisine de erişim şartının aynı olması. yani user girişi ortak şart. koşullar başka olsaydı birlikte yazamazdık.*/}
        <Route element={<PrivateRouter />}>
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
