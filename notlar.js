//! Öncelikle theme.js dosyasında lightheme ve darktheme diye iki obje oluşturduk.

//?  Sonra App.js te bunları import ettik. ThemeProvidera verceğimiz theme için stata oluşturduk. Ayrıca kullanıcı seçimini yakalamk için de myTheme diye bir state açtık.myTheme stateine footer da ihtiyacımız olduğu için AppRouter aracılığıyla footer componentine stateimizi ulaştırdık.

//! Detail sayfasında renklendirme için ekstra bir div daha açtık ve o div içinde renk tanımlaması yaptık.

//? Footer da state in değeri light ise lightIconu göster yoksa darkıconu göster dedik. Ayrıca dive onclick verdik ki iconlara tıkladığında stateimizi güncellesin.

//! Icon componentinde de ve about sayfasında ıconların yeri ve boyutları ile alakalı güncelleme yaptık.

//+ Detail sayfasında id ye göre veri çekmeyi de yaptık.İnceleyebilirsiniiz.

//? Navbar da NavLinkin isActive özelliğini kullanmak için MenuLink stylinda .active classına css vererek o özelliği aktif etmişi olduk.Navlink kullandığınızda otomatik olarak aktif olan linke active class'ı eklenir, dolayısıyla herhangi bir stil dosyasında .active{  } tanımlamanız yeterli olacaktır.

//* Notes!
//? Genellikle style yapıalrınız tasarım ile geleceği için öncelikle styled componentlerinizi oluşturabilirsiniz. Yada Önce html iskeletinizi oluşturabilirsiniz.
//! Diyelim tasarım hazır değil kendiniz tsarlıyorsunuz. O zaman styled componentlerinizi tanımlayıp css vermeden oluşturabilirsiniz. Daha sonra html de iskeletlerinizi kurup css yazmaya o şekilde de başlayabilirsiniz. Terrcih sizlere kalıyor farkeden bir durum yada bir zorunluluk yok.Aşağıdaki örnekte ki gibi.

//!1.adım
/*export const AboutContainer = styled.div`

`
//! 2.adım
const About = () =>{
    return (
        <AboutContainer>

        </AboutContainer>
    )
}
//! 3.adım
daha sonra tekrar styleda dönerek css yazmaya başlayabilirsiniz

export const AboutContainer = styled.div`
    display:flex;
`
*/
