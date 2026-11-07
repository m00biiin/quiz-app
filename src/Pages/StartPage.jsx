import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Questions from "../Data/Questions";
import "../CSS/startpage.css";
import Context from "../Context/Context";

const StartPage = () => {
  const { resetQuiz } = useContext(Context);
  useEffect(() => {
    resetQuiz();
  }, []);

  return (
    <>
      <div className="icon">
        <i className="fa-regular fa-circle-question"></i>
      </div>
      <h1>JavaScript & React Quiz</h1>
      <p>Test your basics in a few minutes</p>
      <div className="datas">
        <span>{Questions.length} questions</span>
        <span>~{Questions.length} min</span>
        <span>Single choice</span>
      </div>

      <Link className="navigate" id="start-navigate" to="/quiz">
        Start Exam
      </Link>

      <p>You can go back and change your answers.</p>
    </>
  );
};

export default StartPage;
