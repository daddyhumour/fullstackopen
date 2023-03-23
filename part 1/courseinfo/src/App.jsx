import React from "react";

const Header = (props) => {
  return <h1>{props.courseName}</h1>;
};

const Content = ({ courseParts }) => {
  console.log(courseParts);
  return (
    <ul>
      {courseParts.map((p) => (
        <li key={p.part}>
          {p.part} {p.exercises}
        </li>
      ))}
    </ul>
  );
  // return content.forEach((c) => <p>c.part c.exercises</p>);
};

const Total = ({ courseParts }) => {
  let totalExercises = 0;

  courseParts.forEach((p) => {
    totalExercises += p.exercises;
  });

  return <p>Number of exercises {totalExercises}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      { part: "Fundamentals of React", exercises: 10 },
      { part: "Using props to pass data", exercises: 7 },
      { part: "State  of component", exercises: 14 },
    ],
  };

  return (
    <div>
      <Header courseName={course.name} />
      <Content courseParts={course.parts} />
      <Total courseParts={course.parts} />
    </div>
  );
};
export default App;
