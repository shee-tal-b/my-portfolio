import React from 'react';
import './Education.css';

function Education() {
  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>AECS MAGNOLIA MAARUTI PUBLIC SCHOOL</h3>
            <p>(HIGH SCHOOL)</p>
            <p>2016 - 2021</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>PES UNIVERSITY</h3>
            <p>(COMPUTER SCIENCE ENG)</p>
            <p>2021 - Present</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
