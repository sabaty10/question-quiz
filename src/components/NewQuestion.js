import React from "react";

const NewQuestion = ({
  question,
  answer,
  setQuestion,
  setAnswer,
  questionsList,
  setQuestionsList,
}) => {
  //Functions
  const submitHolder = () => {
    if (question && answer) {

      //add the question to the array of questions
      setQuestionsList([
        ...questionsList,
        {
          question: question,
          answer: answer,
          id: Math.random() * 1000,
        },
      ]);
      setQuestion("");
      setAnswer("");
    } else {
      alert("Please fill all the components...")
    }
  };

  const inputQuestion = (el) => {
    setQuestion(el.target.value);
  };

  const inputAnswer = (el) => {
    setAnswer(el.target.value);
  };

  return (
    <div className="new-question">
      <h1>Enter a new question</h1>

      <form className="form">
        <label>
          Question:
          <input
            type="text"
            name="question"
            value={question}
            placeholder="Enter your question here..."
            onChange={inputQuestion}
          />
        </label>

        <label>
          Answer:
          <input
            type="text"
            value={answer}
            placeholder="Enter your answer here..."
            onChange={inputAnswer}
          />
        </label>

        <button type="button" onClick={submitHolder}>
          GO !
        </button>
      </form>
    </div>
  );
};

export default NewQuestion;
