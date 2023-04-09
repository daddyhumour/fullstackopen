import React from "react";

const CourseModule = ({ name, exercises }) => {
  console.log("Course Module: ", name, exercises);
  return (
    <li>
      {name} {exercises}
    </li>
  );
};

export default CourseModule;
