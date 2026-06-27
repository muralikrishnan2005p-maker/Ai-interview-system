import Navbar from "../components/Navbar";

function Report() {
  return (

    <>
      <Navbar />

      <div className="report-container">


        <div className="report-heade">
          <h1>Final Interview Report</h1>
          <p>
            AI-generated summary of candidate performance.
          </p>
        </div>

        <div className="report-card">
          <h2>Candidate Details</h2>

          <p><strong>Name:</strong> Murali Krishnan</p>

          <p><strong>Role:</strong> Frontend Developer</p>

          <p><strong>Interview Type:</strong> Technical</p>

        </div>

        <div className="report-card">
          <h2>Interview Information</h2>
          <p><strong>Interview ID : </strong>INT2026001</p>
          <p><strong>Date : </strong> 30 May 2026 </p>
          <p><strong>Duration : </strong> 15 Minutes </p>

        </div>

        <div className="report-card">
          <h2>Final Score </h2>
          <div className="final-score">
            85%
          </div>

          <div className="status-badge">
            Selected ✅
          </div>

          <div className="recommendation-badge">

            Highly Recommended

          </div>

        </div>

        <div className="report-card">
          <h2>Strengths</h2>

          <ul>
            <li>Strong Communication Skilss</li>
            <li>Good Confidence Level</li>
            <li>Clear Technical Explanations</li>
          </ul>

        </div>

        <div className="report-card">

          <h2>Areas for Improvement</h2>

          <ul>
            <li>Improve Problem Solving Speed</li>
            <li>Provide More Detailed Examples</li>
          </ul>

        </div>

        <div className="report-card">

          <h2>Performance Summary</h2>

          <p>
            Candidate showed strong communication,
            confidence, and technical knowledge
            throughout the interview process.
          </p>

        </div>
        <div className="report-card">

          <h2>AI Summary</h2>
          <p>
            The candidate performed well throughout
            the interview and demonstrated strong
            communication skills, confidence, and
            technical understanding.
          </p>

        </div>
        <button className="download-btn">
          Download Pdf Report
        </button>

      </div>
    </>
  );

}

export default Report;