import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Home() {

  return (
    <>
      <Navbar />

      <section className="hero-section">

        <h1 className="hero-title">
          AI Video Interview System
        </h1>

        <p className=" AI Video Interview System">

          Smart AI-powered recruitment platform with
          real-time speech analysis, emotion detection,
          and automated candidate evaluation.
        </p>

        <Link to="/setup">
          <button className="hero-btn">
            Get Started
          </button>
        </Link>

      </section>

      <section className="stats-section">

        <div className="stat-card">
          <h2>10K+</h2>
          <p>Interviews Conducted</p>
        </div>

        <div className="stat-card">
          <h2>95%</h2>
          <p>Analysis Accuracy</p>
        </div>

        <div className="stat-card">
          <h2>500+</h2>
          <p>Companies Supported</p>
        </div>

      </section>

      <section className="why-section">
        <h2 className="section-title">
          Why Choose Us?
        </h2>

        <div className="why-container">
          <div className="why-card">
            AI-Powered Evaluation
          </div>

          <div className="why-card">
            Real-Time Analysis
          </div>

          <div className="why-card">
            Detailed Performance Reports
          </div>
        </div>
      </section>

      <section className="features-section">

        <h2 className="section-title">
          Key Features
        </h2>

        <div className="eatures-container">

          <div className="feature-card">

            <h3>AI Question Generator</h3>

            <p>
              Generates intelligent interview questions
              based on job role and difficulty level.
            </p>
          </div>

          <div className="feature-card">
            <h3>Emotion Detection</h3>
            <p>
              Detects candidate emotions and confidence
              during the interview session.
            </p>
          </div>

          <div className="feature-card">
            <h3>Speech Analysis</h3>
            <p>
              Analyzes speaking clarity, fluency,
              and communication skills.
            </p>
          </div>

        </div>
      </section>

      <section className="workflow-section">
        <h2 className="section-title">
          How It Works
        </h2>

        <div className="workflow-container">

          <div className="workflow-step">
            <span>1</span>
            <p>Setup Interview</p>
          </div>

          <div className=" workflow-step ">
            <span>2</span>
            <p>Attend AI Interview</p>
          </div>

          <div className="workflow-step">
            <span>3</span>
            <p>AI Analysis</p>
          </div>

          <div className="workflow-step">
            <span>4</span>
            <p>Get Final Report</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <h3>AI Video Interview System</h3>
        <p>
          Smart Recruitment Through Artificial Intelligence
        </p>

        <p>
          © 2026 All Rights Reserved
        </p>
      </footer>


    </>
  );
}

export default Home;