import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import Context from "../Context/Context";

import Questions from "../Data/Questions";
import "../CSS/resultpage.css";

const levels = [
  { min: 80, label: "Advanced", iconClassName: "fa-solid fa-trophy" },
  { min: 50, label: "Intermediate", iconClassName: "fa-solid fa-medal" },
  { min: 0, label: "Beginner", iconClassName: "fa-solid fa-seedling" },
];

const ResultPage = () => {
  const { isSubmitted, userAnswer } = useContext(Context);

  const results = Questions.map((q) => {
    const chosen = userAnswer[q.id];
    let status = "unanswered";
    if (chosen !== undefined) {
      status = chosen === q.answer ? "correct" : "wrong";
    }
    return { ...q, chosen, status };
  });

  const corrects = results.filter((result) => result.status === "correct");
  const wrongs = results.filter((result) => result.status === "wrong");
  const unanswereds = results.filter(
    (result) => result.status === "unanswered",
  );
  const summary = [
    { status: "correct", label: "Correct", count: corrects.length },
    { status: "wrong", label: "Wrong", count: wrongs.length },
    { status: "unanswered", label: "Unanswered", count: unanswereds.length },
  ];
  const percent = results.length
    ? Math.round((corrects.length / results.length) * 100)
    : 0;
  const level = levels.find((l) => percent >= l.min);

  if (!isSubmitted) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <h1>Your Result</h1>
      <div className="score">
        {unanswereds.length === results.length ? (
          <p>You didn't answer any questions.</p>
        ) : (
          <>
            <div className="level">
              <i className={level.iconClassName}></i>
              <p>{level.label}</p>
            </div>
            <span>Score: {percent}%</span>
          </>
        )}
      </div>

      <div className="status">
        {summary.map((s) => (
          <span key={s.status} data-status={s.status}>
            {s.count} {s.label}
          </span>
        ))}
      </div>

      <div className="results">
        {results.map((result, index) => (
          <div key={result.id} className="result">
            <div className="question-info">
              <h3>
                Q{index + 1}: {result.question}
              </h3>
              <dl className="answers">
                {result.status !== "unanswered" && (
                  <div className="answer-row">
                    <dt>Your answer:</dt>
                    <dd>{result.chosen}</dd>
                  </div>
                )}
                {result.status !== "correct" && (
                  <div className="answer-row">
                    <dt>Correct answer:</dt>
                    <dd>{result.answer}</dd>
                  </div>
                )}
              </dl>
            </div>
            <div className="question-status">
              {result.status === "correct" ? (
                <span data-status="correct">✓ Correct</span>
              ) : result.status === "wrong" ? (
                <span data-status="wrong">✗ Wrong</span>
              ) : (
                <span data-status="unanswered">Unanswered</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <Link to="/" className="navigate" id="start-navigate">
        Try again
      </Link>
    </>
  );
};

export default ResultPage;
