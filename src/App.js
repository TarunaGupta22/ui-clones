import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Row from "./components/Row";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Row title="Trending Now" />
    </div>
  );
}

export default App;
