import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ onClickBtn }) {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <button
          id="good"
          name="good"
          className={s.button}
          type="button"
          onClick={onClickBtn}
        >
          Good
        </button>
      </li>
      <li className={s.item}>
        <button
          id="neutral"
          name="neutral"
          className={s.button}
          type="button"
          onClick={onClickBtn}
        >
          Neutral
        </button>
      </li>
      <li className={s.item}>
        <button
          id="bad"
          name="bad"
          className={s.button}
          type="button"
          onClick={onClickBtn}
        >
          Bad
        </button>
      </li>
    </ul>
  );
}

FeedbackOptions.propTypes = {
  onClickBtn: PropTypes.func.isRequired,
};

export default FeedbackOptions;
