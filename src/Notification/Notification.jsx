import React from 'react';
import css from './Notification.module.css';

// Компонент для відображення повідомлення
const Notification = ({ message }) => (
  <p className={css.notification}>{message}</p> // Виводить текст повідомлення, переданий через пропси
);

export default Notification;
