// src/pages/Privacy.jsx

import React from "react";
import { Link } from "react-router-dom";
import "../styles/legal.css";

export default function PrivacyPolicy() {
  return (
    <div className="legal-container">
      <h1>Privacy Policy</h1>
      <p>Last updated: November 4, 2025</p>

      <p>
        Welcome to <strong>CLT GoGreen</strong> (“we”, “our”, or “us”). This
        Privacy Policy describes how we collect, use, and protect your
        information when you use our website and app at{" "}
        <a href="https://clt-gogreen.onrender.com" target="_blank" rel="noopener noreferrer">
          https://clt-gogreen.onrender.com
        </a>.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li><strong>Account Info:</strong> Name, email, and optional profile details you provide.</li>
        <li><strong>Activity Data:</strong> Sustainable actions you log and app usage analytics.</li>
        <li><strong>Device Data:</strong> Browser type, IP address, and OS for security.</li>
      </ul>

      <h2>2. How We Use Your Data</h2>
      <ul>
        <li>To provide and improve the CLT GoGreen experience.</li>
        <li>To show progress, leaderboards, and achievements.</li>
        <li>To send reminders and community updates.</li>
      </ul>

      <h2>3. Data Sharing</h2>
      <p>
        We never sell your personal information. We may share data with trusted partners who
        help operate our platform, under strict confidentiality.
      </p>

      <h2>4. Your Rights</h2>
      <p>
        You can request to view, edit, or delete your data by emailing{" "}
        <a href="mailto:support@cltgogreen.com">support@cltgogreen.com</a>.
      </p>

      <h2>5. Changes</h2>
      <p>
        Updates to this Privacy Policy will appear here with a revised date. Continued use
        means you accept any updates.
      </p>

      <Link to="/" className="legal-backlink">
        ← Back to Home
      </Link>
    </div>
  );
}

