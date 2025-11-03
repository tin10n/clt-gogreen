// src/pages/Leaderboard.jsx

import React from 'react';
import { Link } from "react-router-dom";
import '../styles/leaderboard.css';

const topTeams = [
  {
    rank: 1,
    name: "Dilworth Green Squad",
    zipcode: "28203",
    points: 15420,
    members: 184,
    trend: "+12%",
  },
  {
    rank: 2,
    name: "NoDa Eco Warriors",
    zipcode: "28205",
    points: 14850,
    members: 167,
    trend: "+8%",
  },
  {
    rank: 3,
    name: "Plaza Midwood Planters",
    zipcode: "28205",
    points: 13920,
    members: 152,
    trend: "+15%",
  },
  {
    rank: 4,
    name: "South End Sustainers",
    zipcode: "28203",
    points: 12680,
    members: 143,
    trend: "+5%",
  },
  {
    rank: 5,
    name: "Ballantyne Rangers",
    zipcode: "28277",
    points: 11410,
    members: 138,
    trend: "+7%",
  }
];

const Leaderboard = () => {
  const getRankIcon = (rank) => {
    if (rank === 1) return "👑";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return `#${rank}`;
  };

  return (
    <section className="leaderboard">
      <div className="leaderboard__container">
        {/* Header */}
        <div className="leaderboard__header">
          <h2 className="leaderboard__title">🏆 Team Leaderboard</h2>
          <p className="leaderboard__subtitle">
            See which Charlotte neighborhoods are leading the sustainability charge.
          </p>
        </div>

        {/* Leaderboard Card */}
        <div className="leaderboard__card">
          <div className="leaderboard__card-header">
            <div>
              <h3>This Week’s Rankings</h3>
              <p>Updated live • 47 teams competing</p>
            </div>
            <button className="btn-secondary">View Full Board</button>
          </div>

          <div className="leaderboard__list">
            {topTeams.map((team) => (
              <div
                key={team.rank}
                className={`leaderboard__item ${
                  team.rank === 1 ? "leaderboard__item--highlight" : ""
                }`}
              >
                {/* Left side */}
                <div className="leaderboard__info">
                  <div className="leaderboard__rank">{getRankIcon(team.rank)}</div>
                  <div className="leaderboard__team">
                    <div className="leaderboard__team-name">{team.name}</div>
                    <div className="leaderboard__team-details">
                      <span>Zipcode: {team.zipcode}</span> •{" "}
                      <span>{team.members} members</span>
                    </div>
                  </div>
                </div>

                {/* Right side */}
                <div className="leaderboard__score">
                  <div className="leaderboard__points">
                    {team.points.toLocaleString()} pts
                  </div>
                  <div className="leaderboard__trend">📈 {team.trend}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="leaderboard__footer">
            <p>
              Want to see your team on the leaderboard? Start completing tasks today!
            </p>
            <Link to="/login"> <button className="btn-primary">Join Your Team</button> </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;

