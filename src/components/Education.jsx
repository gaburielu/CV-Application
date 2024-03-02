import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const EducationSection = ({ education, setEducation }) => {
  const [newEducation, setNewEducation] = useState({
    id: uuidv4(),
    level: "",
    institute: "",
    period: "",
    other: "",
  });

  const addEducation = () => {
    setEducation([...education, newEducation]);
    setNewEducation({
      id: uuidv4(),
      level: "",
      institute: "",
      period: "",
      other: "",
    });
  };

  const deleteEducation = (id) => {
    const updatedEducation = education.filter((edu) => edu.id !== id);
    setEducation(updatedEducation);
  };

  return (
    <div>
      {" "}
      <div className="edit-head">
        <h2>Education</h2>
        <ul>
          {education.map((edu) => (
            <div key={edu.id} className="list-delete">
              <p>
                <b>{edu.institute}</b>
                {": " + edu.level}
              </p>
              <button onClick={() => deleteEducation(edu.id)}>Delete</button>
            </div>
          ))}
        </ul>
      </div>
      <div className="edit-content">
        <input
          className="edit-input"
          type="text"
          value={newEducation.institute}
          onChange={(e) =>
            setNewEducation({ ...newEducation, institute: e.target.value })
          }
          placeholder="Institute/School"
        />
        <input
          className="edit-input"
          type="text"
          value={newEducation.level}
          onChange={(e) =>
            setNewEducation({ ...newEducation, level: e.target.value })
          }
          placeholder="Education Level"
        />
        <input
          className="edit-input"
          type="text"
          value={newEducation.period}
          onChange={(e) =>
            setNewEducation({ ...newEducation, period: e.target.value })
          }
          placeholder="Period of study"
        />
        <input
          className="edit-input"
          type="text"
          value={newEducation.other}
          onChange={(e) =>
            setNewEducation({ ...newEducation, other: e.target.value })
          }
          placeholder="Other Achievement"
        />
        <button className="update-button" onClick={addEducation}>
          Add Education
        </button>
      </div>
    </div>
  );
};

export default EducationSection;
