import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  // burada user isimli bir değişken oluşturduk. koşulumuz user aktif mi değil mi. user true ise privetrouter alt kümesinde olan about ve details kısmına erişim sağlanacak. alt küme olduğu için onların yerine <outlet/> yazdık. false ise istediğimiz yere yönlendiririz. burada anasayfaya yönlendirdik.
  // sessionstorageden getitem ile veri al. varsa veriyi kullan (burada user) yoksa false (initial value).
  const user = sessionStorage.getItem("user") || false;

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
