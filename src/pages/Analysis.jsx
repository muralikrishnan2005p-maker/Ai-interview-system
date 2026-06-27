import Navbar from "../components/Navbar";


function Analysis() {
  return (
    <>
      <Navbar />

      <div className="analysis-container">

        <div className="analysis-header">
          <h1> AI Analysis Report</h1>

          <p>
            Performance evaluation generated
            by the AI interview system.
          </p>
        </div>

        <div className="overall-score-card">
          <h2>Overall Score</h2>
          <span>85%</span>
        </div>

        <div className="score-grid">
          <div className="score-card">
            <h3>Confident</h3>
            <p>90%</p>
          </div>
          
          <div className="score-card">
            <h3>Communication</h3>
            <p>82%</p>
          </div>

          <div className="score-card">
            <h3>Technical Skills</h3>
            <p>87%</p>
          </div>

          <div className="score-card">
            <h3>Problem Solving</h3>
            <p>85%</p>
          </div>
        </div>

        <div className="emotion-card">
          <h2>Emotion Analysis</h2>

          <p>
            😊 Confident & Calm
          </p>
        </div>

        <div className="feedback-card">
          <h2>AI Feedback</h2>

          <p>
            The candidate demonstrated strong
            communication skills and maintained
            confidence throughout the interview.
            Technical responses were clear and
            well-structured.
          </p>
        </div>

      </div>


    </>

  );

}

export default Analysis;