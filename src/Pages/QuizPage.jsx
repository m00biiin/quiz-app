import { useContext, useRef } from "react";
import Context from "../Context/Context";

import Questions from "../Data/Questions.js";
import Question from "../Components/Question";
import "../CSS/quizpage.css";
import { NavLink, Navigate } from "react-router-dom";

const QuizPage = () => {
  const { questionNumber, setQuestionNumber, userAnswer, setIsSubmitted } =
    useContext(Context);

  const dialogRef = useRef(null);
  const currentQuestion = Questions[questionNumber - 1];

  if(!currentQuestion){
    return <Navigate to="/" replace />
  }

  return (
    <>
      <div className="progress">
        <p className="progress-text">
          Question{" "}
          <span key={questionNumber} className="progress-number">
            {questionNumber}
          </span>{" "}
          of {Questions.length}
        </p>
      </div>

      <Question number={questionNumber} data={currentQuestion} />

      <div className="buttons">
        <button
          className="navigate"
          disabled={questionNumber === 1}
          onClick={() => setQuestionNumber(questionNumber - 1)}
        >
          Previous
        </button>

        {questionNumber === Questions.length ? (
          <button
            className="navigate"
            onClick={() => dialogRef.current.showModal()}
          >
            Submit
          </button>
        ) : (
          <button
            className="navigate"
            onClick={() => {
              setQuestionNumber(questionNumber + 1);
            }}
          >
            Next
          </button>
        )}
        <dialog
          ref={dialogRef}
          className="confirm-dialog"
          aria-labelledby="confirm-title"
        >
          <h3 id="confirm-title">Submit your answers?</h3>
          <p>
            You have answered {Object.keys(userAnswer).length} out of{" "}
            {Questions.length} questions.
          </p>
          <div className="confirm-actions">
            <button
              className="navigate cancel"
              onClick={() => dialogRef.current.close()}
            >
              Cancel
            </button>
            <NavLink
              to="/result"
              className="navigate submit"
              onClick={() => {
                setIsSubmitted(true);
              }}
            >
              Submit
            </NavLink>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default QuizPage;
