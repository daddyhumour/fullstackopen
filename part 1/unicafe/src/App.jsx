import { useState } from "react";

const Button = ({ name, handleClick }) => {
  return <button onClick={() => handleClick({ name })}>{name}</button>;
};

const StatisticLine = ({ name, value }) => {
  return name !== "Positive" ? (
    <p>
      {name} {value}
    </p>
  ) : (
    <p>
      {name} {value}%
    </p>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  return good + neutral + bad > 0 ? (
    <>
      <StatisticLine name="Good" value={good} />
      <StatisticLine name="Neutral" value={neutral} />
      <StatisticLine name="Bad" value={bad} />
      <StatisticLine name="All" value={good + neutral + bad} />
      <StatisticLine
        name="Average"
        value={(good + bad * -1) / (good + neutral + bad)}
      />
      <StatisticLine
        name="Positive"
        value={(good / (good + neutral + bad)) * 100}
      />
    </>
  ) : (
    <p>No feedback given</p>
  );
};

const App = () => {
  const [good, updateGood] = useState(0);
  const [neutral, updateNeutral] = useState(0);
  const [bad, updateBad] = useState(0);

  const handleClick = ({ name }) => {
    console.log("handleClick:- ", { name });
    switch (name) {
      case "Good":
        updateGood(good + 1);
        break;
      case "Neutral":
        updateNeutral(neutral + 1);
        break;
      case "Bad":
        updateBad(bad + 1);
        break;
      default:
        console.log("handleClick:- something is wrong");
    }
  };

  return (
    <>
      <title>Unifcafe</title>
      <h2>Give Feedback</h2>
      <br />
      <Button name="Good" handleClick={handleClick} />
      <Button name="Neutral" handleClick={handleClick} />
      <Button name="Bad" handleClick={handleClick} />
      <br />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
