import { memo } from "react";
import "./SideBar.css";

const SideBar = memo(({ sections, activeSections }) => {
  return (
    <ul className="sidebar">
      {sections.map((sectionId) => {
        const isActive = activeSections.includes(sectionId);
        return (
          <li className={isActive ? "active" : ""} key={sectionId}>
            Section {sectionId}
          </li>
        );
      })}
    </ul>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
