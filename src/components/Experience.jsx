import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const ExperienceSection = ({ experience, setExperience }) => {
  const [newExperience, setNewExperience] = useState({
    id: uuidv4(),
    company: "",
    position: "",
    role: "",
    period: "",
  });

  const addExperience = () => {
    setExperience([...experience, newExperience]);
    setNewExperience({
      id: uuidv4(),
      company: "",
      position: "",
      role: "",
      period: "",
    });
  };

  const deleteExperience = (id) => {
    const updatedExperience = experience.filter((xp) => xp.id !== id);
    setExperience(updatedExperience);
  };

  return (
    <div className="edit-body">
      <div className="edit-head">
        <h2>Experience</h2>
        <ul>
          {experience.map((xp) => (
            <div key={xp.id} className="list-delete">
              <p >
                <b>{xp.company}</b>
              </p>
              <button onClick={() => deleteExperience(xp.id)}>Delete</button>
            </div>
          ))}
        </ul>
      </div>

      <div className="edit-content">
        <input
          className="edit-input"
          type="text"
          value={newExperience.company}
          onChange={(e) =>
            setNewExperience({ ...newExperience, company: e.target.value })
          }
          placeholder="Name of Company"
        />
        <input
          className="edit-input"
          type="text"
          value={newExperience.position}
          onChange={(e) =>
            setNewExperience({ ...newExperience, position: e.target.value })
          }
          placeholder="Position"
        />
        <input
          className="edit-input"
          type="text"
          value={newExperience.role}
          onChange={(e) =>
            setNewExperience({ ...newExperience, role: e.target.value })
          }
          placeholder="Role and Responsibilities"
        />
        <input
          className="edit-input"
          type="text"
          value={newExperience.period}
          onChange={(e) =>
            setNewExperience({ ...newExperience, period: e.target.value })
          }
          placeholder="Period of work"
        />
        <button className="update-button" onClick={addExperience}>
          Add Experience
        </button>
      </div>
    </div>
  );
};

export default ExperienceSection;
