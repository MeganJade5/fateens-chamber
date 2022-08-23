// import SimpleHome from "./SimpleHome";
import About from "./About";
import Location from "./Location";
import Reviews from "./Reviews";
import Secrets from "./Secrets";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      {/* <SimpleHome/> */}
      <Header />
      <About />
      <Location />
      <Reviews />
      <Secrets />


      <Footer title={"Visit again."} description={"Whatever your problem may be, my fortune-telling shall lead to the solution."} />
    </div>
  );
}

export default App;
