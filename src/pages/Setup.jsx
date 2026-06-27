import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Setup() {

  const [candidateName, setCandidateName] = useState("");
  const [jobRole, setJobRole] = useState("Frontend developer");

  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  return (
    <>
      <Navbar />

      <div className="setup-container">

        <div className="setup-card">

          <h1 className="setup-title">
            Interview Setup
          </h1>

          <p className="setup-description">
            Configure your AI interview preferences
            before starting the session.
          </p>

          <from className="setup-form">

            <div className="form-group">
              <label>Candidate Name</label>
              <input type="text" placeholder="Enter Your Full Name"
                value={candidateName} onChange={(e) => {
                  setCandidateName(e.target.value);
                  setNameError("");
                }}
              />
              {nameError && (
                <p className="error-text">{nameError}</p>
              )}
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter Your Email"
                value={email} onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
              />
              {emailError && (
                <p className="error-text">{emailError}</p>
              )}
            </div>

            <div className="form-group">

              <label>Job Role</label>

              <select value={jobRole} onChange={(e) => setJobRole(e.target.value)}>
                <option>Frontend developer</option>
                <option>Backend Developer</option>
                <option>Full Stack Developer</option>
                <option>Java Developer</option>
              </select>

            </div>

            <div className="form-group">

              <label>Experience lavel</label>

              <select>
                <option>Fresher</option>
                <option>1 - 2 Years</option>
                <option>3 - 5 Years</option>
              </select>
            </div>

            <div className="form-group">
              <label>Difficulty Lavel</label>
              <select>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>

            <div className="form-group">

              <label>Interwiew Type</label>
              <select>
                <option>Technical</option>
                <option>HR Round</option>
                <option>Mixed</option>
              </select>
            </div>

            <button
              type="button"
              onClick={() => {

                let hasError = false;

                setNameError("");
                setEmailError("");

                if (!candidateName.trim()) {
                  setNameError("Candidate Name is required");
                  hasError = true;
                }

                if (!email.trim()) {
                  setEmailError("Email Address is required");
                  hasError = true;
                }

                if (hasError) {
                  return;
                }

                localStorage.setItem(
                  "candidateName",
                  candidateName
                );

                localStorage.setItem(
                  "jobRole",
                  jobRole
                );

                localStorage.setItem(
                  "email",
                  email
                );

                navigate("/interview");

              }}
            >
              Start Interview
            </button>

          </from>
        </div>

      </div>
    </>
  );
}

export default Setup;