import "./App.css";
import Container from "./component/BannerContainer";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Container></Container>

      <div className="grid grid-cols-12">
        <div className="bg-gray-400 border-2 h-[400px] col-span-8"></div>
        <div className="bg-purple-400 border-2 h-[400px] col-span-4"></div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
