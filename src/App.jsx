import { useCallback, useState } from "react";
import Sections from "./Sections";
import SideBar from "./SideBar";
import "./App.css";

const sections = Array.from({ length: 20 }, (_, i) => i + 1);

function App() {
  const [activeSections, setActiveSections] = useState([]);

  const updateActiveSections = useCallback(({ sectionId, isActive = true }) => {
    setActiveSections((prev) => {
      if (isActive) {
        if (prev.includes(sectionId)) {
          return prev;
        }
        return [...prev, sectionId];
      } else {
        return prev.filter((id) => id !== sectionId);
      }
    });
  }, []);

  return (
    <div className="main">
      <Sections
        sections={sections}
        updateActiveSections={updateActiveSections}
      />
      <SideBar sections={sections} activeSections={activeSections} />
    </div>
  );
}

export default App;
