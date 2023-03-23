import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [selected, updateSelected] = useState(0);
  const [vote, updateVote] = useState(new Array(anecdotes.length).fill(0));
  const [mostVotes, updateMostVotes] = useState(0);

  const handleNextAnecdotes = ({ selected }) => {
    let nextAnecdotes = selected;

    console.log("handleNextAnecdotes before: ", selected, " ", nextAnecdotes);
    do {
      nextAnecdotes = Math.floor(Math.random() * 8);
    } while (selected === nextAnecdotes);
    console.log("handleNextAnecdotes after: ", selected, " ", nextAnecdotes);

    updateSelected(nextAnecdotes);
  };

  const handleVote = ({ selected }) => {
    const copyVote = [...vote];

    console.log("handleVote before:- ", selected, " ", copyVote);
    copyVote[selected] += 1;
    // const copyMostVotes = copyVote.indexOf(Math.max(...copyVote));
    console.log(
      "handleVote after:- ",
      selected,
      " ",
      copyVote
      // " ",
      // copyMostVotes
    );

    updateVote(copyVote);
    updateMostVotes(copyVote.indexOf(Math.max(...copyVote)));
  };

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <br />
      <button onClick={() => handleNextAnecdotes({ selected })}>
        next anecdotes
      </button>
      <button onClick={() => handleVote({ selected })}>vote</button>
      <p>has {vote[selected]} votes</p>
      <h2>Anecdote with most votes</h2>
      {anecdotes[mostVotes]}
    </div>
  );
};

export default App;
