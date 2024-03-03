import { useState } from "react";

const Resume = ({ personal, education, experience }) => {
  const ListPersonal = () => (
    <div className="personal-header">
      <div className="personal-head-top">
        <h1>{personal.name}</h1>
        <p>{personal.phone}</p>
        <p>{personal.email}</p>
      </div>
      <br />
      <div className="personal-summary">
        <p>{personal.summary}</p>
      </div>
    </div>
  );

  const listExperience = experience.map((detail) => (
    <div className="form-section" key={detail.id}>
      <h4 className="form-section-title">{detail.company}</h4>
      <div className="form-section-mid">
        <div>{detail.position}</div>
        <div>{detail.period}</div>
      </div>
      <p>{detail.role}</p>
      <hr />
    </div>
  ));

  const listEducation = education.map((detail) => (
    <div className="form-section" key={detail.id}>
      <h4 className="form-section-title">{detail.institute}</h4>
      <div className="form-section-mid">
        <div>{detail.level}</div>
        <div>{detail.period}</div>
      </div>
      <p>{detail.other}</p>
      <hr />
    </div>
  ));

  return (
    <div className="resume-container">
      <div id="resume">
        <ListPersonal />
        <hr />
        <h3 className="content-header">Experience</h3>
        {listExperience}
        <hr />
        <h3 className="content-header">Education and Certificate</h3>
        {listEducation}
        <hr />
      </div>
    </div>
  );
};

export default Resume;
