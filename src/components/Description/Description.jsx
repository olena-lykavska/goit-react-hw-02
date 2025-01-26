// components/Description/Description.jsx
import React from 'react';
import css from './Description.module.css'; // стилі для компонента (якщо потрібно)

const Description = () => {
  return (
    <div className={css.descriptionContainer}>
      <h2 className={css.descriptionTitle}>Sip Happens Café
</h2>
      <p className={css.descriptionText}>
        Please leave your feedback about our service by selecting one of the options below.
      </p>
    </div>
  );
};

export default Description;
