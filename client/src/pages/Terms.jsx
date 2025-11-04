// src/pages/Terms.jsx

import React from "react";
import { Link } from "react-router-dom";
import "../styles/legal.css";

export default function TermsOfService() {
  return (
    <div className="legal-container">
      <h1>Terms of Service</h1>
      <p>Last updated: November 4, 2025</p>

      <p>
        Welcome to <strong>CLT GoGreen</strong>! By using our website and app at{" "}
        <a href="https://clt-gogreen.onrender.com" target="_blank" rel="noopener noreferrer">
          https://clt-gogreen.onrender.com
        </a>, you agree to these Terms.
      </p>

      <h2>1. Use of the Service</h2>
      <ul>
        <li>Use CLT GoGreen lawfully and responsibly.</li>
        <li>Do not abuse or manipulate the gamification system.</li>
        <li>Accounts may be suspended for misuse or dishonesty.</li>
      </ul>

      <h2>2. Accounts</h2>
      <p>
        You are responsible for maintaining the confidentiality of your login credentials and
        for any activity under your account.
      </p>

      <h2>3. Intellectual Property</h2>
      <p>
        All platform content and design belong to CLT GoGreen. You may not reproduce or
        distribute content without permission.
      </p>

      <h2>4. Disclaimer</h2>
      <p>
        The service is provided “as is.” We make no guarantees of uninterrupted access or error-free performance.
      </p>

      <h2>5. Limitation of Liability</h2>
      <p>
        CLT GoGreen is not responsible for indirect or incidental damages resulting from your use of the platform.
      </p>

      <h2>6. Contact</h2>
      <p>
        For questions, reach us at{" "}
        <a href="mailto:support@cltgogreen.com">support@cltgogreen.com</a>.
      </p>

      <Link to="/" className="legal-backlink">
        ← Back to Home
      </Link>
    </div>
  );
}
