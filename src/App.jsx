import { useState } from "react";
import "./styles/App.css";
import Editor from "./components/Editor";
import Resume from "./components/Form";
import { v4 as uuidv4 } from "uuid";

function App() {
  
  //PERSONAL INFO

  const [personal, setPersonal] = useState([
    { title: "Name", value: "John Doe", id: uuidv4() },
    { title: "Contact", value: "000", id: uuidv4() },
    { title: "Email", value: "placeholder@resume.com", id: uuidv4() },
  ]);

  const handleNewPersonal = (id, newValue) => {
    const updatedPersonal = personal.map((item) =>
      item.id === id ? { ...item, value: newValue } : item
    );
    setPersonal(updatedPersonal);
  };

  //EDUCATION & EXPERIENCE

  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  return (
    <div id="body">
      <header className="header">head</header>
      <section className="editResume">
        <Editor
          personal={personal}
          handleNewPersonal={handleNewPersonal}
          education={education}
          setEducation={setEducation}
          experience={experience}
          setExperience={setExperience}
        />
      </section>
      <main>
        <Resume personal={personal} education={education} experience={experience}/>
      </main>
    </div>
  );
}

export default App;
