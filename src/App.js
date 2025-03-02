import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LitGig from "./components/litgig.js";
import Stage from "./components/stage.js";
import DebSoc from "./components/debsoc.js";
import QuizSoc from "./components/quizsoc.js";
import FilmSoc from "./components/filmsoc.js";
import "./App.css";
import background from "./assets/background.png"; // Import the background image
import lsdlogo from "./assets/lsdlogo.png";
import logo from "./assets/logo.png"; // Import the logo/image
import date from "./assets/date.png";
import image1 from "./assets/lit.png"; // Import local images
import image2 from "./assets/film.png";
import image3 from "./assets/deb.png";
import image4 from "./assets/quiz.png";
import image5 from "./assets/stage.png";

function App() {
  const [players, setPlayers] = useState([
    { id: 1, name: "Basic Sciences", score: 0 },
    { id: 2, name: "Chemical", score: 200 },
    { id: 3, name: "Civil", score: 200 },
    { id: 4, name: "CSE", score: 550 },
    { id: 5, name: "ECE", score: 1050 },
    { id: 6, name: "EEE", score: 500 },
    { id: 7, name: "IT/AI", score: 150 },
    { id: 8, name: "MACS/CDS", score: 50 },
    { id: 9, name: "Mechanical", score: 700 },
    { id: 10, name: "Mining", score: 0 },
    { id: 11, name: "MME", score: 400 },
    { id: 12, name: "SOM", score: 0 },
  ]);

  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  return (
      <div
        className="App"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          padding: "20px",
          position: "relative", // Required for the overlay positioning
        }}
      >
        {/* Logo/Image at the top left corner */}
        <img src={lsdlogo} alt="LSD Logo" className="lsdlogo" />

        {/* Logo/Image at the top center */}
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>

        <img src={date} alt="Date" className="date"></img>

        {/* Horizontal Navigation Menu */}
        <nav className="nav-menu">
          <Link to="/litgig">LitGig</Link>
          <span className="separator">|</span>
          <Link to="/stage">Stage</Link>
          <span className="separator">|</span>
          <Link to="/debsoc">DebSoc</Link>
          <span className="separator">|</span>
          <Link to="/quizsoc">QuizSoc</Link>
          <span className="separator">|</span>
          <Link to="/filmsoc">FilmSoc</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="welcome">
                  <div className="h1">
                    <h1>Welcome!</h1>
                  </div>
                  <div className="text-box">
                    The battle for departmental glory is ON! Watch as departments
                    go head-to-head in the ultimate showdown across five
                    electrifying events—testing their creativity, intellect, and
                    stage presence. Every round is a step closer to victory, but
                    only one department will rise above the rest to claim the LSD
                    Overdoze Championship! Five Events. One Champion. Stay tuned
                    for live updates as departments fight for the grand title and
                    a share of the ₹40,000 prize pool!
                  </div>
                </div>

                <div className="h2">
                  <h1>Schedule</h1>
                </div>
                <div className="image-grid">
                  {/* Image 1 */}
                  <div className="image-wrapper">
                    <img src={image1} alt="LitGig" />
                    <div className="hover-text">
                      <p>1st March | 2 PM to 5 PM | LHC A</p>
                    </div>
                  </div>

                  {/* Image 2 */}
                  <div className="image-wrapper">
                    <img src={image2} alt="Stage" />
                    <div className="hover-text">
                      <p>2nd March | 2 PM | SJA</p>
                    </div>
                  </div>

                  {/* Image 3 */}
                  <div className="image-wrapper">
                    <img src={image3} alt="DebSoc" />
                    <div className="hover-text">
                      <p>1st & 2nd March | 10 AM | CIDS</p>
                    </div>
                  </div>

                  {/* Image 4 */}
                  <div className="image-wrapper">
                    <img src={image4} alt="QuizSoc" />
                    <div className="hover-text">
                      <p>1st March (Prelims) | 10 AM | LHC A || 2nd March (Finals) | 10 AM | SJA</p>
                    </div>
                  </div>

                  {/* Image 5 */}
                  <div className="image-wrapper">
                    <img src={image5} alt="FilmSoc" />
                    <div className="hover-text">
                      <p>1st March (Pitching) | 12 PM | LHC A || 2nd March (Film making) | 2 PM | LHC A</p>
                    </div>
                  </div>
                </div>

                <div className="h3">
                  <h1>Leaderboard</h1>
                </div>
                {/* Leaderboard */}
                <div className="leaderboard">
                  {/* Top 3 Ranks */}
                  <div className="top-three">
                    {sortedPlayers.slice(0, 3).map((player, index) => (
                      <div
                        key={player.id}
                        className={`top-rank rank-${index + 1}`}
                      >
                        <div className="rank">{index + 1}</div>
                        <div className="name">{player.name}</div>
                        <div className="score">{player.score}</div>
                      </div>
                    ))}
                  </div>

                  {/* Remaining Ranks (Scrollable) */}
                  <div className="scrollable-ranks">
                    {sortedPlayers.slice(3).map((player, index) => (
                      <div key={player.id} className="rank-item">
                        <div className="rank">{index + 4}</div>
                        <div className="name">{player.name}</div>
                        <div className="score">{player.score}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="welcome">
                  <div className="h4">
                    <h1>Rules for Points Distribution</h1>
                  </div>
                  <div className="text-box">
                    Event-Wise Points Distribution:
                    <p>1st Place – 500 points</p>
                    <p>2nd Place – 300 points</p>
                    <p>3rd Place – 200 points</p>
                    Tiebreakers : In case of a tie in overall leaderboard
                    standings, the department with the most 1st place finishes
                    will rank higher. If still tied, the department with the most
                    finalist appearances will rank higher.
                  </div>
                </div>


                <div className="contact">
                  <div className="h5">
                    <h1>Contacts</h1>
                  </div>
                  <div className="text-box">          
                    <p>Ananya – 9600455506</p>
                    <p>Raajan – 9686412075</p>
                    <p>Vignesh – 9019747931</p>
                  </div>
                </div>
              </>
            }
          />
          <Route path="/litgig" element={<LitGig />} />
          <Route path="/stage" element={<Stage />} />
          <Route path="/debsoc" element={<DebSoc />} />
          <Route path="/quizsoc" element={<QuizSoc />} />
          <Route path="/filmsoc" element={<FilmSoc />} />
        </Routes>
      </div>
  );
}

export default App;