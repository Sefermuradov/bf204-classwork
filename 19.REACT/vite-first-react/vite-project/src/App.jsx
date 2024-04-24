import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Cards from "./Component/Cards";
import { products } from "./data/products";
function App() {
  let fullName = "Sefer Muradov";
  return (
    <>
      <Header fullName={fullName} />
      <Cards products={products} />
      <Footer />
    </>
  );
}

export default App;
