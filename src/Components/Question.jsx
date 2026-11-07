import "../CSS/question.css";

import { useContext } from "react";
import Context from "../Context/Context";

const Question = ({ data, number }) => {
  const { userAnswer, setUserAnswer } = useContext(Context);
  const selected = userAnswer[data.id];

  return (
    <>
      <h2>
        Q{number}: {data.question}
      </h2>

      <div className="options">
        {data.options.map((option) => (
          <button
            key={option}
            aria-pressed={option === selected}
            onClick={() => {
              if (option === userAnswer[data.id]) {
                setUserAnswer((prev) => {
                  const answers = { ...prev };
                  delete answers[data.id];
                  return answers;
                });
              } else {
                setUserAnswer((prev) => ({ ...prev, [data.id]: option }));
              }
            }}
            className={option === selected ? "selectedOption" : ""}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
};

export default Question;
