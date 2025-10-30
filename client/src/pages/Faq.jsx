import React from "react";
import "../styles/faq.css";
import Eco from "../images/eco.svg";
import Help from "../images/help.svg";
import Location from "../images/location.svg";
import Question from "../images/question.svg";
import Team from "../images/team.svg";


function Faq() {
    return (
        <div className="faq-container">
            <h2 className="faq-title">Charlotte's Community, <span className="faq-highlight">United for Change</span></h2>
            <p className="faq-subtitle">
                Join thousands of Charlotte residents who are making a difference through small, daily sustainable actions.
            </p>

            <div className="faq-card">
                <img className="faq-icon one-icon" src={Eco} alt="leaf icon" />
                <div>
                    <h3>What is CLT GoGreen?</h3>
                    <p>Our platform empowers Charlotte residents to take part in daily sustainable actions, track and gamify that progress, 
                        and grow a greener community together.
                    </p>
                </div>
            </div>

            <div className="faq-card">
                <img className="faq-icon two-icon" src={Question} alt="question mark icon" />
                <div>
                    <h3>How do I get started?</h3>
                    <p>Sign up! Visit our homepage and join your neighborhood group and begin completing eco‑friendly tasks suggested by our AI assistant.</p>
                </div>
            </div>

            <div className="faq-card">
                <img className="faq-icon three-icon" src={Location} alt="location icon" />
                <div>
                    <h3>Do I need to live in Charlotte, NC to join?</h3>
                    <p>Currently, our program focuses on Charlotte residents, but we plan to scale to other areas in the near future and maybe even bring 
                        GoGreen to businesses.
                    </p>
                </div>
            </div>

            <div className="faq-card">
                <img className="faq-icon four-icon" src={Help} alt="helping hand icon" />
                <div>
                    <h3>What kind of sustainable actions can I complete?</h3>
                    <p>Actions range from reducing energy use, carpooling, recycling properly, to participating in local environmental or volunteering events.</p>
                </div>
            </div>

            <div className="faq-card">
                <img className="faq-icon five-icon" src={Team} alt="teams icon" />
                <div>
                    <h3>Who is the team behind this app?</h3>
                    <p>We are Green Beans! A small team of technologists with a passion for sustainability, who decided saving the Earth is cooler than scrolling 
                        TikTok all day (though we still do that too)! We’re designers, developers, and sustainability enthusiasts working together to make 
                        eco-friendly actions simple, fun, and something you’ll actually want to do. Our mission? Help Charlotte become greener, one bean powered 
                        action at a time.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Faq