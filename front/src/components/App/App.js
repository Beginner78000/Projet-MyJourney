import { Route, Routes } from "react-router-dom";
import { useState } from "react";

// User Register
import Account from "../../pages/users/Account";
import Register from "../../pages/users/Register";
import Profile from "../../pages/Profile";
import Login from "../../pages/users/Login";
import Navbar from "../NavBar/NavBar";
import Post from "../../pages/posts/Post";

// Authentification
import AuthenticatedRoute from "../Authenticated/AuthenticatedRoute";
import { hasAuthenticated } from "../../services/AuthApi";
import Auth from "../../contexts/Auth";

// Header Footer 404
// import Page404 from "../../pages/page404/Page404";
import Page404 from "../../pages/page404/NotFound";
import Header from "../Home/Header/Header";
import Footer from "../Home/Footer/Footer";

// Earth
import { Earth } from "../Home/Earth/Earth";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

// Scss and Css
import "../../App.css";
import "./App.scss";

// Pages
import Button from "../Home/Button/Button";
import { Quiz } from "../Quiz/Quiz";
import Posts from "../../pages/posts/Posts";
import QuizResults from "../QuizResults/QuizResults";
import Destination from "../Destination/Destination";
import Forum from "../Forum/Forum";
import ForumTalks from "../ForumTalks/ForumTalks";
import Activites from "../Activities/Activites";
import Restaurant from "../Restaurant/Restaurant";
import Hotel from "../Hotel/Hotel";
import DestinationMap from "../DestinationMap/DestinationMap";
import About from "../About/About";
import Team from "../Team/Team";

// const ROLES = {
//   Traveller: 2001,
//   Admin: 5150,
// };

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
  const [quizResult, setQuizResult] = useState([]);

  const setDestination = (data) => {
    setQuizResult(data);
  };

  // const responsive = window.screen.width;

  return (
    <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <div className="App">
        <Header />

        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Button />
                <Canvas>
                  <Suspense fallback={null}>
                    <Earth />
                  </Suspense>
                </Canvas>
              </>
            }
          />
          {/* public routes */}
          <Route
            exact
            path="/quiz"
            element={<Quiz setDestination={setDestination} />}
          />
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/quiz-results"
            element={<QuizResults data={quizResult} />}
          />
          <Route path="/destinations/:id" element={<Destination />} />
          <Route path="/destinations/:id/map" element={<DestinationMap />} />
          <Route
            path={`/destinations/:id/activities`}
            element={<Activites />}
          />
          <Route
            path={`/destinations/:id/restaurants`}
            element={<Restaurant />}
          />
          <Route path={`/destinations/:id/hotels`} element={<Hotel />} />
          <Route exact path="/posts" element={<Posts />} />
          <Route exact path="/posts/:id" element={<Post />} />
          <Route exact path="/login" element={<Login />} />{" "}
          <Route exact path="/register" element={<Register />} />
          <Route path='/login' element={<Profile />} />
          <Route path="/team" element={<Team />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/forum/:category/:slug" element={<ForumTalks />} />
          {/* we want to protect these routes */}
          <Route element={<AuthenticatedRoute />}>
            <Route path="/account" element={<Account />} />
            
          </Route>
          {/* <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="admin" element={<Admin />} />
        </Route> */}
          {/* catch all */}
          <Route path="*" element={<Page404 />} />
        </Routes>

        <Footer />
      </div>
    </Auth.Provider>
  );
}
export default App;
