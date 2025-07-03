import { useState } from "react";
import styles from "./Answer.module.css";

const Answer = ({ updatePoints }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") {
      alert("Пожалуйста, введите ответ!");
      return;
    }
    updatePoints(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.answerForm}>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите ответ"
        className={styles.answerInput}
        autoFocus
      />
      <button type="submit" className={styles.submitButton}>
        Проверить
      </button>
    </form>
  );
};

export default Answer;
