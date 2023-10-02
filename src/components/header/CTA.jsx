import React from "react";
import CV from "../../assets/cv.pdf";

export default function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contacts" className="btn btn-primary" target="_blank">
        Let's Talk
      </a>
    </div>
  );
}
