import { useEffect, useRef } from "react";
import "./Section.css";
import useInViewPort from "./hooks/useInViewPort";

const Section = ({ sectionId, updateActiveSections }) => {
  const sectionRef = useRef(null);
  const isInViewPort = useInViewPort(sectionRef);

  useEffect(() => {
    if (isInViewPort) {
      console.log("in vie port section", sectionId);
      updateActiveSections({ sectionId, isActive: true });
    } else {
      updateActiveSections({ sectionId, isActive: false });
    }
  }, [isInViewPort, sectionId, updateActiveSections]);
  return (
    <section id={sectionId}>
      <h1 ref={sectionRef}>Section {sectionId}</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nam ex
      doloremque officiis enim delectus nulla aliquid, excepturi perspiciatis a
      aperiam at illo. Mollitia tenetur iusto magnam molestias nulla odit
      delectus voluptatum veniam, at autem, quo explicabo nostrum? Rem quaerat
      aperiam enim esse atque, ipsa aspernatur magnam est debitis aut. Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Deleniti nam ex
      doloremque officiis enim delectus nulla aliquid, excepturi perspiciatis a
      aperiam at illo. Mollitia tenetur iusto magnam molestias nulla odit
      delectus voluptatum veniam, at autem, quo explicabo nostrum? Rem quaerat
      aperiam enim esse atque, ipsa aspernatur magnam est debitis aut. Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Deleniti nam ex
      doloremque officiis enim delectus nulla aliquid, excepturi perspiciatis a
      aperiam at illo. Mollitia tenetur iusto magnam molestias nulla odit
      delectus voluptatum veniam, at autem, quo explicabo nostrum? Rem quaerat
      aperiam enim esse atque, ipsa aspernatur magnam est debitis aut. Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Deleniti nam ex
      doloremque officiis enim delectus nulla aliquid, excepturi perspiciatis a
      aperiam at illo. Mollitia tenetur iusto magnam molestias nulla odit
      delectus voluptatum veniam, at autem, quo explicabo nostrum? Rem quaerat
      aperiam enim esse atque, ipsa aspernatur magnam est debitis aut. Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Deleniti nam ex
      doloremque officiis enim delectus nulla aliquid, excepturi perspiciatis a
      aperiam at illo. Mollitia tenetur iusto magnam molestias nulla odit
      delectus voluptatum veniam, at autem, quo explicabo nostrum? Rem quaerat
      aperiam enim esse atque, ipsa aspernatur magnam est debitis aut. Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Deleniti nam ex
      doloremque officiis enim delectus nulla aliquid, excepturi perspiciatis a
      aperiam at illo. Mollitia tenetur iusto magnam molestias nulla odit
      delectus voluptatum veniam, at autem, quo explicabo nostrum? Rem quaerat
      gnam est debitis aut.
    </section>
  );
};

export default Section;
