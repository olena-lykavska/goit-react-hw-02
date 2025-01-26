import React, { useState, useEffect } from 'react';
import Options from '../Options/Options'; // Імпорт компонента для кнопок
import Feedback from '../Feedback/Feedback'; // Імпорт компонента для статистики
import Notification from '../Notification/Notification'; // Імпорт компонента для повідомлень
import Description from '../Description/Description'; // Імпорт компонента Description
import css from "./App.module.css"; // Імпорт стилів

const App = () => {
  // Ініціалізація стану з локального сховища
  // useState з функцією, щоб уникнути дублювання при рендері
  const [feedback, setFeedback] = useState(() => {
    // Перевірка, чи є збережені відгуки в локальному сховищі
    const savedFeedback = localStorage.getItem('feedback');
    if (savedFeedback) {
      return JSON.parse(savedFeedback); // Якщо є збережені дані, використовуємо їх
    }
    // Якщо немає збережених даних, ініціалізуємо з значеннями за замовчуванням
    return { good: 0, neutral: 0, bad: 0 };
  });

  // Завантаження даних з локального сховища при оновленні сторінки
  useEffect(() => {
    const storedFeedback = JSON.parse(localStorage.getItem('feedback'));
    if (storedFeedback) {
      setFeedback(storedFeedback); // Якщо є збережені відгуки, встановлюємо їх у стан
    }
  }, []); // Пустий масив залежностей — виконується тільки при монтуванні компонента

  // Збереження відгуків у локальному сховищі після кожної зміни стану
  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback)); // Оновлення локального сховища
  }, [feedback]); // Виконується при кожній зміні стану feedback

  // Функція для оновлення кількості відгуків
  const updateFeedback = (type) => {
    setFeedback((prevState) => ({
      ...prevState, // Зберігаємо попередній стан
      [type]: prevState[type] + 1, // Оновлюємо кількість вибраного типу відгуку
    }));
  };

  // Функція для скидання всіх відгуків
  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 }); // Скидаємо значення до нуля
  };

  // Обчислення загальної кількості відгуків
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  // Обчислення відсотка позитивних відгуків
  const positivePercentage = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100) // Формула для обчислення відсотка
    : 0; // Якщо немає відгуків, відсоток 0%

  return (
    <div className={css.container}>
{/* Компонент Description */}
      <Description />

      {/* Компонент для кнопок відгуків */}
      <Options
        onLeaveFeedback={updateFeedback} // Передаємо функцію для оновлення відгуків
        onReset={resetFeedback} // Передаємо функцію для скидання всіх відгуків
        totalFeedback={totalFeedback} // Передаємо кількість відгуків
      />

      {/* Якщо є хоча б один відгук, показуємо статистику */}
      {totalFeedback ? (
        <Feedback
          good={feedback.good} // Позитивні відгуки
          neutral={feedback.neutral} // Нейтральні відгуки
          bad={feedback.bad} // Негативні відгуки
          totalFeedback={totalFeedback} // Загальна кількість відгуків
          positivePercentage={positivePercentage} // Відсоток позитивних відгуків
        />
      ) : (
        // Якщо відгуків немає, показуємо повідомлення
        <Notification message="No feedback yet" />
      )}
    </div>
  );
};

export default App;
