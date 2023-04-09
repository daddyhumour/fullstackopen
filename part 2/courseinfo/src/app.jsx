import React from "react";
import Course from "./components/course";

const App = () => {
  const course = [
    {
      id: 1,
      name: "Half Stack application development",
      module: [
        { id: 1, name: "Fundamentals of React", exercises: 10 },
        { id: 2, name: "Using props to pass data", exercises: 7 },
        { id: 3, name: "State  of component", exercises: 14 },
      ],
    },
    {
      id: 2,
      name: "Node.js",
      module: [
        { id: 1, name: "Routing", exercises: 3 },
        { id: 2, name: "Middlewares", exercises: 7 },
      ],
    },
  ];

  return <Course course={course} />;
};
export default App;
