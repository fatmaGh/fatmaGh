import React from "react";
import Presentation from "../Presentation/Presentation";
import "./About.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";

const html = 90;
const css = 70;
const About2 = () => {
  return (
    <div className="about" >
      <a id="about-top"></a>
      <Presentation />
      <div className="skills">
        <div className="skill">
          <AnimatedProgressProvider
            valueStart={0}
            valueEnd={90}
            duration={0.7}
            easingFunction={easeQuadInOut}
          >
            {(value) => {
              const roundedValue = Math.round(value);
              return (
                <CircularProgressbar
                  value={value}
                  text={`${roundedValue}%`}
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    backgroundColor: "#FF5151",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                    pathTransition: "none",
                  })}
                />
              );
            }}
          </AnimatedProgressProvider>
          <h6 className="skill-title">HTML</h6>
        </div>
        <div className="skill">
          <AnimatedProgressProvider
            valueStart={0}
            valueEnd={70}
            duration={0.7}
            easingFunction={easeQuadInOut}
          >
            {(value) => {
              const roundedValue = Math.round(value);
              return (
                <CircularProgressbar
                  value={value}
                  text={`${roundedValue}%`}
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    backgroundColor: "#FF5151",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                    pathTransition: "none",
                  })}
                />
              );
            }}
          </AnimatedProgressProvider>
          <h6 className="skill-title">css</h6>
        </div>
        <div className="skill">
          <AnimatedProgressProvider
            valueStart={0}
            valueEnd={60}
            duration={0.7}
            easingFunction={easeQuadInOut}
          >
            {(value) => {
              const roundedValue = Math.round(value);
              return (
                <CircularProgressbar
                  value={value}
                  text={`${roundedValue}%`}
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    backgroundColor: "#FF5151",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                    pathTransition: "none",
                  })}
                />
              );
            }}
          </AnimatedProgressProvider>
          <h6 className="skill-title">javascript</h6>
        </div>
        <div className="skill">
          <AnimatedProgressProvider
            valueStart={0}
            valueEnd={50}
            duration={0.7}
            easingFunction={easeQuadInOut}
          >
            {(value) => {
              const roundedValue = Math.round(value);
              return (
                <CircularProgressbar
                  value={value}
                  text={`${roundedValue}%`}
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    backgroundColor: "#FF5151",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                    pathTransition: "none",
                  })}
                />
              );
            }}
          </AnimatedProgressProvider>
          <h6 className="skill-title">scss</h6>
        </div>
        <div className="skill">
          <AnimatedProgressProvider
            valueStart={0}
            valueEnd={80}
            duration={0.7}
            easingFunction={easeQuadInOut}
          >
            {(value) => {
              const roundedValue = Math.round(value);
              return (
                <CircularProgressbar
                  value={value}
                  text={`${roundedValue}%`}
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    backgroundColor: "#FF5151",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                    pathTransition: "none",
                  })}
                />
              );
            }}
          </AnimatedProgressProvider>
          <h6 className="skill-title">ReactJs</h6>
        </div>
        <div className="skill">
          <AnimatedProgressProvider
            valueStart={0}
            valueEnd={60}
            duration={0.7}
            easingFunction={easeQuadInOut}
            // repeat
          >
            {(value) => {
              const roundedValue = Math.round(value);
              return (
                <CircularProgressbar
                  value={value}
                  text={`${roundedValue}%`}
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    backgroundColor: "#FF5151",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                    pathTransition: "none",
                  })}
                />
              );
            }}
          </AnimatedProgressProvider>
          <h6 className="skill-title">redux</h6>
        </div>
        <div className="skill">
          <AnimatedProgressProvider
            valueStart={0}
            valueEnd={90}
            duration={0.7}
            easingFunction={easeQuadInOut}
            // repeat
          >
            {(value) => {
              const roundedValue = Math.round(value);
              return (
                <CircularProgressbar
                  value={value}
                  text={`${roundedValue}%`}
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    backgroundColor: "#FF5151",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                    pathTransition: "none",
                  })}
                />
              );
            }}
          </AnimatedProgressProvider>
          <h6 className="skill-title">Bootstrap</h6>
        </div>
        <div className="skill">
          <AnimatedProgressProvider
            valueStart={0}
            valueEnd={40}
            duration={0.7}
            easingFunction={easeQuadInOut}
          >
            {(value) => {
              const roundedValue = Math.round(value);
              return (
                <CircularProgressbar
                  value={value}
                  text={`${roundedValue}%`}
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    backgroundColor: "#FF5151",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                    pathTransition: "none",
                  })}
                />
              );
            }}
          </AnimatedProgressProvider>
          <h6 className="skill-title">mongodb</h6>
        </div>
        <div className="skill">
          <AnimatedProgressProvider
            valueStart={0}
            valueEnd={60}
            duration={0.7}
            easingFunction={easeQuadInOut}
          >
            {(value) => {
              const roundedValue = Math.round(value);
              return (
                <CircularProgressbar
                  value={value}
                  text={`${roundedValue}%`}
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    backgroundColor: "#FF5151",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                    pathTransition: "none",
                  })}
                />
              );
            }}
          </AnimatedProgressProvider>
          <h6 className="skill-title">NodeJs</h6>
        </div>
      </div>
    </div>
  );
};

export default About2;
