import React from 'react';
import PropTypes from 'prop-types';
import s from './Notification.module.css';

function Notification({ message }) {
  return (
    <div>
      <p className={s.text}>{message}</p>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
