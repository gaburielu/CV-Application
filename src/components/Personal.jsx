import { useState } from "react";

const PersonalSection = ({ personal, handleNewPersonal }) => {
  const [nameValue, setNameValue] = useState("");
  const [contactValue, setContactValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  const handleNameChange = (e) => {
    setNameValue(e.target.value);
  };

  const handleContactChange = (e) => {
    setContactValue(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handleUpdatePersonal = (id, field) => {
    let newValue;

    if (field === "Name") {
      newValue = nameValue;
    } else if (field === "Contact") {
      newValue = contactValue;
    } else {
      newValue = emailValue;
    }
    
    handleNewPersonal(id, newValue);

    if (field === "Name") {
      setNameValue("");
    } else if (field === "Contact") {
      setContactValue("");
    } else if (field === "Email") {
      setEmailValue("");
    }
  };

  return (
    <div className="personal-edit">
      {personal.map((item) => (
        <div key={item.id}>
          <p>
            {item.title}: {item.value}
          </p>
          <input
            type="text"
            value={
              item.title === "Name"
                ? nameValue
                : item.title === "Contact"
                ? contactValue
                : emailValue
            }
            onChange={
              item.title === "Name"
                ? handleNameChange
                : item.title === "Contact"
                ? handleContactChange
                : handleEmailChange
            }
          />
          <br />
          <button
          className="update-button"
            onClick={() => {
              handleUpdatePersonal(item.id, item.title);
            }}
          >
            Update
          </button>
        </div>
      ))}
    </div>
  );
};

export default PersonalSection;
