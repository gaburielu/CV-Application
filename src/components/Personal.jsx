import { useState } from "react";

const PersonalSection = ({ personal, setPersonal }) => {
  const updateName = (newName) => {
    setPersonal((prevPersonal) => ({
      ...prevPersonal,
      name: newName,
    }));
  };
  const updatePhone = (newPhone) => {
    setPersonal((prevPersonal) => ({
      ...prevPersonal,
      phone: newPhone,
    }));
  };
  const updateEmail = (newEmail) => {
    setPersonal((prevPersonal) => ({
      ...prevPersonal,
      email: newEmail,
    }));
  };
  const updateSummary = (newSummary) => {
    setPersonal((prevPersonal) => ({
      ...prevPersonal,
      summary: newSummary,
    }));
  };

  return (
    <div className="personal-edit">
      <input
        className="edit-input"
        type="text"
        onChange={(e) => updateName(e.target.value)}
        placeholder={personal.name}
      />
      <input
        className="edit-input"
        type="number"
        onChange={(e) => updatePhone(e.target.value)}
        placeholder={personal.phone}
      />
      <input
        className="edit-input"
        type="email"
        onChange={(e) => updateEmail(e.target.value)}
        placeholder={personal.email}
        required
      />
      <textarea
        className="edit-summary"
        type="text"
        onChange={(e) => updateSummary(e.target.value)}
        placeholder={personal.summary}
      />
    </div>
  );
};

export default PersonalSection;
