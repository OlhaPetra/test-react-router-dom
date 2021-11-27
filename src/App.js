import React, { useState } from 'react';
import Section from './components/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrFeedback = e => {
    const grade = e.currentTarget.name;
    switch (grade) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage = Math.round(
      (good / countTotalFeedback()) * 100,
    );
    return positiveFeedbackPercentage;
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions onClickBtn={incrFeedback} />
        {countTotalFeedback() === 0 && (
          <Notification message="No feedback given" />
        )}
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={countTotalFeedback()}
          positiveFeedbackPercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
}

export default App;
