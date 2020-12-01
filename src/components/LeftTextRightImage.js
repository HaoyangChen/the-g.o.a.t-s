import { Divider } from "@material-ui/core";
import React from "react";
import "../styles/LeftTextRightImage.css";

const Process = (props) => {
  return (
    <div className={"left-right " + props.backgroundColor}>
      <div className="half-half text-align text-left pd-right ">
        <h2 className={"underline-with-color " + props.underlineColor}>
          {props.title}
        </h2>
        <p class="mt-paragraph">{props.paragraph}</p>
        <span class="bold-style">see more</span>
        <img src={props.arrowImage} alt={props.arrowImageAlt}></img>
      </div>
      <div class="half-half">
        <img src={props.imageSrc} alt={props.imageAlt}></img>
      </div>
    </div>
  );
};

export default Process;
