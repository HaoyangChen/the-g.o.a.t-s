import React from "react";
import "../styles/LeftTextRightImage.css";

const LeftTextRightImage = (props) => {
  return (
    <div className="left-right">
      <div className="half-half text-align text-left">
        <h2 className={"underline-with-color " + props.underlineColor}>
          {props.title}
        </h2>
        <p class="mt-paragraph">{props.paragraph}</p>
      </div>
      <div class="half-half text-right">
        <img src={props.imageSrc} alt={props.imageAlt}></img>
      </div>
    </div>
  );
};

export default LeftTextRightImage;
