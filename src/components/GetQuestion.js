import React, { useState, useEffect } from "react";

const GetQuestion = ({
  question,
  answer,
  points,
  setPoints,
  questionsList,
  setQuestionsList,
  toggle,
  setToggle,
}) => {
  const [answerQuestion, setAnswerQuestion] = useState("");

  const setAnswerForQuestion = (e) => {
    setAnswerQuestion(e.target.value);
  };

  const answerHandler = () => {
    answerQuestion == answer ? success(toggle) : error(toggle);
  };

  const success = (toggle) => {
    setPoints(points + 10);
    setQuestionsList(
      questionsList.filter((item) => item.answer != answerQuestion)
    );
  };

  const error = () => {
    setToggle("error");
  };

  //disappear error div after 3 seconde
  useEffect(() => {
    const timer = setTimeout(() => setToggle(""), 3000);
    console.log(timer);
    return () => clearTimeout(timer);
  }, [toggle]);

  return (
    <div className="display-question">
      <h1 className="display-question__header">Question:</h1>
      <h4>{question}</h4>
      <label>Set your answer</label>
      <input
        type="text"
        name="answer"
        onChange={setAnswerForQuestion}
        placeholder="Enter your answer..."
      ></input>
      <button type="button" onClick={answerHandler}>
        Check
      </button>
    </div>
  );
};

export default GetQuestion;
