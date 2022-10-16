// import SimpleHome from "./SimpleHome";
import About from "./About";
import Location from "./Location";
import Reviews from "./Reviews";
import Secrets from "./Secrets";
import Header from "./Header";
import Footer from "./Footer";
import { React, useState, useEffect, useReducer } from "react";
import { StateContext } from "./utils/StateContext";
import { getPredictions } from "../services/predictionServices";
import Quiz from "./Quiz";
// import Berries from "./Berries";
import BerriesHook from "./BerriesHook";
// import Contact from "./Contact";
import ContactHook from "./ContactHook";
import Container from "@mui/material/Container";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import ThankYouPage from "./ThankYouPage";
import JustBerry from "./JustBerry";
import reducer from "./utils/StateReducer";
import Predictions from "./Predictions";

const sections = [
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Location",
    url: "/location",
  },
  {
    title: "Reviews",
    url: "/reviews",
  },
  {
    title: "Secrets",
    url: "/secrets",
  },
  {
    title: "Would you like to know your fate?",
    url: "/about",
  },
  {
    title: "Berries",
    url: "/berries",
  },
  {
    title: "Contact",
    url: "/contact",
  },
  {
    title: "Predictions",
    url: "/predictions",
  },
];

function LoadingPage() {
  return <h1>Loading... 🔮</h1>;
}

function MainPage() {
  return (
    <div className="App">
      {/* <nav>
        <Link to="/">Home</Link>| <Link to="/about">About</Link>|{" "}
        <Link to="/location">Location</Link>| <Link to="/reviews">Reviews</Link>
        | <Link to="/secrets">Secrets</Link>| <Link to="/quiz">Quiz</Link>|{" "}
        <Link to="/berries">Berries</Link>| <Link to="/contact">Contact</Link>
      </nav> */}

      <Container maxWidth="lg">
        <NavBar
          title="Fateen's Fortune-Telling Chamber"
          sections={sections}
        ></NavBar>
      </Container>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Header />} />
        <Route path="about" element={<About />} />
        <Route path="location" element={<Location />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="secrets" element={<Secrets />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="berries" element={<BerriesHook />} />
        <Route path="contact" element={<ContactHook />} />
        <Route path="thanks" element={<ThankYouPage />} />
        <Route path="berries/:name" element={<JustBerry />} />
        <Route path="predictions" element={<Predictions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer
        title={"Visit again."}
        description={
          "Whatever your problem may be, my fortune-telling shall lead to the solution."
        }
      />
    </div>
  );
}

function App() {
  const initialState = {
    predictions: [],
    loggedInUser: null,
    auth: null,
  };

  const [store, dispatch] = useReducer(reducer, initialState);

  // const queryParams = new URLSearchParams(window.location.search);
  // const isLoading = queryParams.get("loading");
  // console.log(isLoading);

  // 1. Using if-else to do conditional rendering
  // if (isLoading === "true") {
  //   // Show loading page
  //   return (<h1>Loading... 🔮</h1>)
  // } else {
  //   // Show the main app
  // return (
  //   <div className="App">
  //     {/* <SimpleHome/> */}
  //     <Header />
  //     <About />
  //     <Location />
  //     <Reviews />
  //     <Secrets />
  //     <Footer title={"Visit again."} description={"Whatever your problem may be, my fortune-telling shall lead to the solution."} />
  //   </div>
  // );
  // }

  // 2. Use ternary and make it shorter
  // return (isLoading === "true" ? <LoadingPage /> : <MainPage />)

  // 3. Implement a timer

  // useState to create isLoading state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPredictions()
      .then((predictions) =>
        dispatch({ type: "setPredictions", data: predictions })
      )
      .catch((error) => console.log(error));
  }, []);

  // useEffect Hook is like componentDidMount, componentDidUpdate
  // we use it so that when page is updated we can load for 2 secs
  useEffect(() => {
    if (isLoading) {
      // setTimeout for about 2 seconds then let isLoading to false
      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    }
  });

  return (
    <div>
      <StateContext.Provider value={{ store, dispatch }}>
        {isLoading ? <LoadingPage /> : <MainPage />}
      </StateContext.Provider>
    </div>
  );
}

export default App;
