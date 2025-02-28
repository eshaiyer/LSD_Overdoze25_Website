import React from "react";
import "./quizsoc.css"; // Import the CSS file for styling
import logo from "./stage2.png";

function QuizSoc() {
  const players = [
    { id: 1, name: "Basic Sciences", score: 0 },
    { id: 2, name: "Chemical", score: 0 },
    { id: 3, name: "Civil", score: 0 },
    { id: 4, name: "CSE", score: 0 },
    { id: 5, name: "ECE", score: 0 },
    { id: 6, name: "EEE", score: 0 },
    { id: 7, name: "IT/AI", score: 0 },
    { id: 8, name: "MACS/CDS", score: 0 },
    { id: 9, name: "Mechanical", score: 0 },
    { id: 10, name: "Mining", score: 0 },
    { id: 11, name: "MME", score: 0 },
    { id: 12, name: "SOM", score: 0 },
  ];

  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  return (
    <div className="quiz-soc">

      {/* Logo/Image at the top center */}
      <img src={logo} alt="Logo" className="quiz-soc-logo" />

      <div className="h2"><h1>Leaderboard</h1></div>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Department</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {sortedPlayers.map((player, index) => (
            <tr key={player.id}>
              <td>{index + 1}</td>
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="contact">
                  <div className="h5">
                    <h1>Contacts</h1>
                  </div>
                  <div className="text-box">          
                    <p>Aryan – 7676856619</p>
                    <p>Srilagna – 9901033902</p>
                  </div>
                </div>
    </div>
  );
}

export default QuizSoc;