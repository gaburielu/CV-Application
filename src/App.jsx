import { useState } from "react";
import "./styles/App.css";
import "./styles/Form.css";
import Editor from "./components/Editor";
import Resume from "./components/Form";
import JsPDF from "jspdf";
import html2pdf from "html2pdf.js";

function App() {
  //PERSONAL INFO

  const [personal, setPersonal] = useState({
    name: "John Doe",
    phone: "000 000 000",
    email: "placeholder@email.com",
    summary: "Brief summary of yourself and your resume",
  });

  //EDUCATION & EXPERIENCE

  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  //HEADER

  const generatePDF = () => {
    const element = document.querySelector("#resume");

    html2pdf(element, {
      margin: [0, 0, 0, 0],
      filename: "report.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    });
  };

  const Head = () => {
    return (
      <div className="header-container">
        <button className="download-button" onClick={generatePDF}>
          Download Form
        </button>
      </div>
    );
  };

  return (
    <div id="body">
      <header>
        <Head />
      </header>
      <section className="editResume">
        <Editor
          personal={personal}
          setPersonal={setPersonal}
          education={education}
          setEducation={setEducation}
          experience={experience}
          setExperience={setExperience}
        />
      </section>
      <main>
        <Resume
          personal={personal}
          education={education}
          experience={experience}
        />
      </main>
    </div>
  );
}

export default App;
