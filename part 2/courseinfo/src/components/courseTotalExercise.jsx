import React from "react";

const CourseTotalExercise = ({ module }) => {
  const totalExercises = module.reduce((sum, cv) => sum + cv.exercises, 0);

  return (
    <p>
      <b>total of {totalExercises} exercises</b>
    </p>
  );
};

export default CourseTotalExercise;
