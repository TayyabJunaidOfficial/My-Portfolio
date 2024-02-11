import Navbar from "./Home Components/Navbar";
import Header from "./Home Components/Header";
import Introduction from "./Home Components/Introduction";
import Find_Me from "./Home Components/Find_Me";
import Footer from "./Home Components/Footer";

function Home() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Introduction />
      <Find_Me />
      <Footer />
    </div>
  );
}

export default Home;
