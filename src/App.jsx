import "./App.css";
import Container from "./component/BannerContainer";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Card from "./component/Card";
import { Suspense } from "react";

const fetchData = async () => {
  const result = await fetch("/data.json");
  return result.json();
};
function App() {
  const ticketData = fetchData();
  return (
    <>
      <Navbar></Navbar>
      <Container></Container>

      <Suspense
        fallback={<span className="loading loading-spinner text-error"></span>}
      >
        <Card ticketData={ticketData}></Card>
      </Suspense>

      <Footer></Footer>
    </>
  );
}

export default App;
