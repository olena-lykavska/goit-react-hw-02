import React from 'react';
import css from './Options.module.css';

// Компонент для кнопок
const Options = ({ onLeaveFeedback, onReset, totalFeedback }) => (
  <div className={css.buttonsContainer}>
    {/* Кнопка для додавання позитивного відгуку */}
    <button className={css.button} onClick={() => onLeaveFeedback('good')}>Good</button>

    {/* Кнопка для додавання нейтрального відгуку */}
    <button className={css.button} onClick={() => onLeaveFeedback('neutral')}>Neutral</button>

    {/* Кнопка для додавання негативного відгуку */}
    <button className={css.button} onClick={() => onLeaveFeedback('bad')}>Bad</button>

    {/* Кнопка для скидання відгуків (видима тільки якщо є хоча б один відгук) */}
    {totalFeedback > 0 && (
    <button className={`${css.button} ${css.resetButton}`} onClick={onReset}>
      Reset
    </button>
  )}
  </div>
);

export default Options;
