import React, { useEffect, useState, useMemo } from 'react';
import { Link } from "react-router-dom";
import '../styles/leaderboard.css';

const zipToTeamName = {
  28203: "Dilworth Green Squad",
  28205: "NoDa Eco Warriors",         
  28217: "South Tryon Recyclers",
  28269: "University Area Upcyclers",
  28277: "Ballantyne Rangers",
};

const Leaderboard = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/api/leaderboard', {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' },
			});
        const data = await response.json();
        setRows(Array.isArray(data) ? data : []);
      } catch (e) {
        setErr('Failed to load leaderboard');
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

 
  const teams = useMemo(() => {
    return rows
      .map((r, i) => ({
        rank: i + 1,
        name: zipToTeamName[r.zip_code] || `Team ${r.zip_code}`,
        zipcode: String(r.zip_code),
        points: Number(r.points) || 0,
        members: Number(r.members) || 0,
        trend: "+0%",
      }))
      .slice(0, 50); 
  }, [rows]);

  const getRankIcon = (rank) => {
    if (rank === 1) return "👑";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return `#${rank}`;
  };

  if (loading) {
    return (
      <section className="leaderboard">
        <div className="leaderboard__container">
          <div className="leaderboard__header">
            <h2 className="leaderboard__title">🏆 Team Leaderboard</h2>
            <p className="leaderboard__subtitle">Loading…</p>
          </div>
        </div>
      </section>
    );
  }

  if (err) {
    return (
      <section className="leaderboard">
        <div className="leaderboard__container">
          <div className="leaderboard__header">
            <h2 className="leaderboard__title">🏆 Team Leaderboard</h2>
            <p className="leaderboard__subtitle">{err}</p>
          </div>
        </div>
      </section>
    );
  }

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

        {/* Card */}
        <div className="leaderboard__card">
          <div className="leaderboard__card-header">
            <div>
              <h3>This Week’s Rankings</h3>
              <p>Updated live • {teams.length} teams competing</p>
            </div>
            <button className="btn-secondary">View Full Board</button>
          </div>

          <div className="leaderboard__list">
            {teams.map((team) => (
              <div
                key={team.zipcode}
                className={`leaderboard__item ${team.rank === 1 ? "leaderboard__item--highlight" : ""}`}
              >
                {/* Left */}
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

                {/* Right */}
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
            <p>Want to see your team on the leaderboard? Start completing tasks today!</p>
            <Link to="/login"><button className="btn-primary">Join Your Team</button></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
