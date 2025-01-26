import React from 'react';
import css from './Feedback.module.css';

// Компонент для відображення статистики
const Feedback = ({ good, neutral, bad, totalFeedback, positivePercentage }) => (
<div className={css.statsContainer}>
  <h2 className={css.statsTitle}>Statistics</h2>
  <ul className={css.statsList}>
    <li className={css.statItem}>
      <span>Good:</span> <span>{good}</span>
    </li>
    <li className={css.statItem}>
      <span>Neutral:</span> <span>{neutral}</span>
    </li>
    <li className={css.statItem}>
      <span>Bad:</span> <span>{bad}</span>
    </li>
    <li className={css.statItem}>
      <span>Total:</span> <span>{totalFeedback}</span>
    </li>
    <li className={css.statItem}>
      <span>Positive feedback:</span> <span>{positivePercentage}%</span>
    </li>
  </ul>
</div>
);

export default Feedback;
