import Navbar from "../components/Navbar";
import { useState,useEffect } from "react";

function Interview() {

  const [cameraOn, setCameraOn] = useState(true);
  const [micOn, setMicOn] = useState(true);
  const [recording, setRecording] = useState(false);
  const[timeLeft, setTimeLeft] = useState(45);


  useEffect (() =>{
    if(! recording || timeLeft <=0)return;

    const timer = setInterval (() =>{
      setTimeLeft((prev) => prev -1);
    }, 1000);
    return () => clearInterval (timer);
  },[recording, timeLeft]);


  const candidateName =
    localStorage.getItem("candidateName") || "Candidate";

  const jobRole =
    localStorage.getItem("jobRole") || "Frontend Developer";

  const questions = [
    "Explain the difference between React state and props.",
    "What is useState Hook in React?",
    "What is Virtual DOM?",
    "Explain React Router.",
    "What is JSX?"
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <>
      <Navbar />

      <div className="interview-container">

        <div className="video-section">
          <div className="video-box">

            <div className="candidate-info">
              <h3>Candidate Details</h3>
              <p>Name: {candidateName}</p>
              <p>Role: {jobRole}</p>
            </div>

            <h2>Camera Preview</h2>

            <div className="camera-placeholder">
              Webcam Feed
            </div>

            <div className="controls">

              <button onClick={() => setCameraOn(!cameraOn)}>
                {cameraOn
                  ? "🎥 Camera ON"
                  : "📷 Camera OFF"}
              </button>

              <button onClick={() => setMicOn(!micOn)}>
                {micOn
                  ? "🎤 Mic ON"
                  : "🔇 Mic OFF"}
              </button>

              <button onClick={() => setRecording(true)}>
                ⏺ Start
              </button>

              <button onClick={() => setRecording(false)}>
                ⏹ Stop
              </button>

            </div>

          </div>
        </div>

        <div className="question-section">

          <div className="question-count">
            Question {currentQuestion + 1} of {questions.length}
          </div>

          <div className="question-card">

            <h3>AI Interview Question</h3>

            <p>
              {questions[currentQuestion]}
            </p>

          </div>

          <div className="progress-wrapper">

            <div
              className="progress-bar"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`
              }}
            ></div>

          </div>

          <div className="timer-box">

            <div className="recording-status">

              {recording
                ? "🔴 Recording Live"
                : "⚪ Recording Stopped"}

            </div>

            <h2>00:
              {timeLeft < 10 ? `0${timeLeft}`: timeLeft}
               </h2>

            <span>Recording...</span>

          </div>

          <div className="emotion-status">

            <h3>Emotion Status</h3>

            <p>😊 Confident</p>

          </div>

          <button
            onClick={() => {

              if (currentQuestion < questions.length - 1) {

                setCurrentQuestion(currentQuestion + 1);

              } else {

                alert("Interview Completed!");

              }

            }}
          >
            Next Question
          </button>

        </div>

      </div>
    </>
  );
}

export default Interview;