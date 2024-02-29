import { useState } from "react";

const Resume = ({ personal, education, experience }) => {
  const listPersonal = personal.map((detail) => (
    <p key={detail.id}>
      <b>{detail.title}</b>
      {": " + detail.value}
    </p>
  ));

  const listEducation = education.map((detail) => (
    <p key={detail.id}>
      <b>{detail.institute}</b>
      {": " + detail.level}
    </p>
  ));

  const listExperience = experience.map((detail) => (
    <p key={detail.id}>
      <b>{detail.company}</b>
      {": " + detail.position}
    </p>
  ));

  return (
    <div className="resume-container">
      <div id="resume">
        {listPersonal}
        {listEducation}
        {listExperience}
      </div>
    </div>
  );
};

export default Resume;
