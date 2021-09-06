import React, { useState } from "react";
import "./App.css";
import NewQuestion from "./components/NewQuestion";
import GetQuestion from "./components/GetQuestion";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [questionsList, setQuestionsList] = useState([]);
  const [points, setPoints] = useState(0);
  const [toggle, setToggle] = useState("");
  return (
    <div className="App">
      <div className={`popNotification ${toggle}`}>
        <p>Error Try Again</p>
      </div>
      <div className="points-container">
        <h1>Your Points</h1>
        <label>{points}</label>
      </div>
      <header className="App-header">
        <h1>Questions Quiz</h1>
      </header>
      <body>
        <NewQuestion
          question={question}
          setQuestion={setQuestion}
          answer={answer}
          setAnswer={setAnswer}
          questionsList={questionsList}
          setQuestionsList={setQuestionsList}
        />

        <h3 className="get-questions">The questions are:</h3>
        <div className="questions-container">
          {questionsList.map((item) => (
            <GetQuestion
              question={item.question}
              answer={item.answer}
              key={item.id}
              points={points}
              setPoints={setPoints}
              questionsList={questionsList}
              setQuestionsList={setQuestionsList}
              toggle={toggle}
              setToggle={setToggle}
            />
          ))}
        </div>
      </body>
    </div>
  );
}

export default App;
