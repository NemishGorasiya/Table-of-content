import { memo } from "react";
import Section from "./Section";
import "./Sections.css";

const Sections = memo(({ sections, updateActiveSections }) => {
  return (
    <div className="sections">
      {sections.map((sectionId) => (
        <Section
          key={sectionId}
          updateActiveSections={updateActiveSections}
          sectionId={sectionId}
        />
      ))}
    </div>
  );
});

Sections.displayName = "Sections";

export default Sections;
