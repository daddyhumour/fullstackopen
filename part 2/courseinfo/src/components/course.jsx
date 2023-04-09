import React, { Fragment } from "react";
import CourseName from "./courseName";
import CourseContent from "./courseContent";
import CourseTotalExercise from "./courseTotalExercise";

// import CourseContent from "./courseContent";
// import CourseTotalExercise from "./courseTotalExercise";

const Course = ({ course }) => {
  console.log("Course: ", course);
  return (
    <div>
      {course.map((c) => (
        <div key={c.id}>
          <CourseName name={c.name} />
          <CourseContent module={c.module} />
          <CourseTotalExercise module={c.module} />
        </div>
      ))}
    </div>
  );
  // <div>
  //   <CourseName name={course.name} />
  //   <CourseContent module={course.module} />
  //   <CourseTotalExercise module={course.module} />
  // </div>
};

export default Course;
