import React from "react";
import CourseModule from "./courseModule";

const CourseContent = ({ module }) => {
  console.log("Course Content: ", module);
  return (
    <ul>
      {module.map((m) => (
        <CourseModule key={m.id} name={m.name} exercises={m.exercises} />
      ))}
    </ul>
  );
};

export default CourseContent;
