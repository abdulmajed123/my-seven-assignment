import "./App.css";
import Container from "./component/BannerContainer";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Card from "./component/Card";
import { Suspense, useState } from "react";
import BannerContainer from "./component/BannerContainer";
import { ToastContainer } from "react-toastify";

const fetchData = async () => {
  const result = await fetch("/data.json");
  return result.json();
};
const ticketData = fetchData();
function App() {
  const [countCard, setCountCard] = useState(0);
  const [resolvedCountCard, setResolvedCountCard] = useState(0);
  const [seletedCard, setSeletedCard] = useState([]);
  const [selecResolveTask, setSelecResolveTask] = useState([]);

  return (
    <>
      <Navbar></Navbar>
      <BannerContainer
        countCard={countCard}
        resolvedCountCard={resolvedCountCard}
      ></BannerContainer>
      <Suspense
        fallback={<span className="loading loading-spinner text-error"></span>}
      >
        <Card
          ticketData={ticketData}
          setCountCard={setCountCard}
          seletedCard={seletedCard}
          setSeletedCard={setSeletedCard}
          setResolvedCountCard={setResolvedCountCard}
          selecResolveTask={selecResolveTask}
          setSelecResolveTask={setSelecResolveTask}
        ></Card>
      </Suspense>

      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
