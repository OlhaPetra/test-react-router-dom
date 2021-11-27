import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercentage,
}) {
  return (
    <>
      {totalFeedback > 0 && (
        <div className={s.statistics}>
          <h1 className={s.title}>Statistics</h1>
          <div className={s.statistics_data}>
            <p className={s.text}>Good: {good}</p>
            <p className={s.text}>Neutral: {neutral}</p>
            <p className={s.text}>Bad: {bad}</p>
          </div>
          <div className={s.analitics}>
            <p className={s.analitics_text}>Total: {totalFeedback}</p>
            <p className={s.analitics_text}>
              Positive feedback:
              {good === 0 ? 0 : positiveFeedbackPercentage}%
            </p>
          </div>
        </div>
      )}
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};

export default Statistics;
