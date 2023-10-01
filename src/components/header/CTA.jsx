import React from "react";
import CV from "../../assets/cv.pdf";

export default function CTA() {
  return (
    <div>
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contacts" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
}
