import "../styles/home.css"
import { useNavigate } from "react-router-dom";
import Hero from "../images/hero.png";
import Mascot from "../images/mascot.png"
import Plant from "../images/plant.png"
import Recycle from "../images/recycle.png"
import Footprint from "../images/carbon_footprint.png"


export default function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/signup");
  }

  return (
    <>
      <div className="hero-section">
        <div className="hero-container">
          <img src={Mascot} className="mascot" alt="image of green bean mascot" />
        </div>

        <div className="hero-text">
          <p>Join your neighbors to champion sustainability, compete as districts, and build a proud, greener community. 
            Every recycled item, dollar saved, and reduced emission makes your area shine on the leaderboard!</p>
          <button className="signup-btn" onClick={handleClick}>GET STARTED</button>
        </div>
      </div>

      <div className="kpis">
        <div className="kpi">
          <img src={Recycle} alt="recycling icon" className="kpi-img" />
          <h3>Recycling</h3>
          <p>Track your impact. Over 12,400 pounds of waste kept out of local landfills this year.</p>
        </div>

        <div className="kpi">
          <img src={Footprint} alt="carbon footprint icon" className="kpi-img" />
          <h3>Carbon Footprint</h3>
          <p>Watch emissions drop as your neighborhood cuts 28,000lbs of CO₂ every month.</p>
        </div>

        <div className="kpi">
          <img src={Plant} alt="plant icon" className="kpi-img" />
          <h3>Money Saved</h3>
          <p>Join hundreds who have saved more than $45,000 through sustainable decisions and watched their savings grow!</p>
        </div>
      </div>

      <div className="why-join">
        <h2>Why Join CLT Go Green?</h2>
        <p className="subtitle">Sustainability isn’t just an idea, it’s a community movement. Here’s what makes joining worth it:</p>

        <div className="benefits">
          <div className="benefit">
            <h3>🏡 Connect Locally</h3>
            <p>Team up with your neighbors, take on fun weekly challenges, and see your community climb the leaderboard together!</p>
          </div>

          <div className="benefit">
            <h3>🌍 Real Impact</h3>
            <p>Every bottle recycled, every watt saved, and every green choice adds up. You’ll see your progress in real time.</p>
          </div>

          <div className="benefit">
            <h3>🤝 Friendly Competition</h3>
            <p>Climb the leaderboard and see everyone's progress! Each district will have their own team name and have their sustainability metrics displayed.</p>
          </div>
        </div>
      </div>
    </>
  )
}