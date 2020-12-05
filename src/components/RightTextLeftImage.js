import React from "react";
import "../styles/LeftTextRightImage.css";

const RightTextLeftImage = (props) => {
  return (
    <div className="left-right row-reversed">
      <div className="half-half text-align text-left pd-left">
        <h2 className={"underline-with-color " + props.underlineColor}>
          {props.title}
        </h2>
        <p class="mt-paragraph">{props.paragraph}</p>
      </div>
      <div class="half-half text-left">
        <img src={props.imageSrc} alt={props.imageAlt}></img>
      </div>
    </div>
  );
};

export default RightTextLeftImage;
