import { useState } from "react";
import Answer from "../Answer/Answer";
import styles from "./MathQuiz.module.css";

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const MathQuiz = () => {
  const [points, setPoints] = useState(0);

  const [a, setA] = useState(() => getRandomNumber(1, 10));
  const [b, setB] = useState(() => getRandomNumber(1, 10));

  const generateNewProblem = () => {
    setA(getRandomNumber(1, 10));
    setB(getRandomNumber(1, 10));
  };

  const updatePoints = (userAnswer) => {
    const correctAnswer = a + b;
    const answerAsNumber = parseInt(userAnswer, 10);

    if (answerAsNumber === correctAnswer) {
      setPoints((currentPoints) => currentPoints + 1);
    } else {
      setPoints((currentPoints) => currentPoints - 1);
    }

    generateNewProblem();
  };

  return (
    <div className={styles.quizContainer}>
      <h2>Ваши очки: {points}</h2>
      <p className={styles.problem}>
        {a} + {b} = ?
      </p>
      <Answer updatePoints={updatePoints} />
    </div>
  );
};

export default MathQuiz;
