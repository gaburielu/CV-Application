import { useState } from "react";
import PersonalSection from "./Personal";
import EducationSection from "./Education";
import ExperienceSection from "./Experience";

export default function Editor({
  personal,
  setPersonal,
  education,
  setEducation,
  experience,
  setExperience,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <EditSection
        title="Education"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        <EducationSection education={education} setEducation={setEducation} />
      </EditSection>
      <EditSection
        title="Experience"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        <ExperienceSection experience={experience} setExperience={setExperience} />
      </EditSection>
      <EditSection
        title="Personal Info"
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)}
      >
        <PersonalSection
          personal={personal}
          setPersonal={setPersonal}
        />
      </EditSection>
    </>
  );
}

function EditSection({ title, children, isActive, onShow }) {
  return (
    <section className="editSection">
      {isActive ? (
        <div className="editArea">{children}</div>
      ) : (
        <button className="editBtn" onClick={onShow}>
          {title}
        </button>
      )}
    </section>
  );
}
