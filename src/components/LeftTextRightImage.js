import { Divider } from "@material-ui/core";
import React from "react";
import "../styles/LeftTextRightImage.css";

const Process = (props) => {
  return (
    <div className={"left-right " + props.backgroundColor}>
      <div className="half-half text-align text-left pd-right ">
        <h2 className={"underline-with-color " + props.underlineColor}>
          Learn.
        </h2>
        <p>
          Find information about key terms, causes, the process of trafficking,
          and more -- allowing you to approach a difficult problem with the
          right context.
        </p>
        <span>see more</span>
        <img src={props.arrowImage} alt={props.arrowImageAlt}></img>
      </div>
      <div class="half-half">
        <img src={props.imageSrc} alt={props.imageAlt}></img>
      </div>
    </div>
  );
};

export default Process;
