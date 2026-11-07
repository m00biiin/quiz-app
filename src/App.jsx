import { useState } from "react";
import StartPage from "./Pages/StartPage";
import QuizPage from "./Pages/QuizPage";
import ResultPage from "./Pages/ResultPage";
import Context from "./Context/Context";
import { Routes, Route, Navigate } from "react-router-dom";
import "./app.css";

const App = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [userAnswer, setUserAnswer] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const resetQuiz = () => {
    setQuestionNumber(1);
    setUserAnswer({});
    setIsSubmitted(false);
  };

  return (
    <Context.Provider
      value={{
        questionNumber,
        setQuestionNumber,
        userAnswer,
        setUserAnswer,
        isSubmitted,
        setIsSubmitted,
        resetQuiz,
      }}
    >
      <div className="app-container">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Context.Provider>
  );
};

export default App;
