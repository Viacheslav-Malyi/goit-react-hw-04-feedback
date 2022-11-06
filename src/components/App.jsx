import { useState } from 'react';
import { Section } from './Sections/Section';
import { FeedbackOption } from './FeedbackOptins/FeedbackOptions';
import { FeedbackStatistick } from './FeedbackStatistick/Feedbacktatistick';
import { Notification } from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodIncrement = () => {
    setGood(prevState => prevState + 1);
  };

  const handleNeutralIncrement = () => {
    setNeutral(prevState => prevState + 1);
  };

  const handleBadIncrement = () => {
    setBad(prevState => prevState + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    return total !== 0 ? Math.round((good * 100) / total) : 0;
  };

  return (
    <div>
      <Section title="Please leave your feedback">
        <FeedbackOption
          options={{
            handleGoodIncrement,
            handleNeutralIncrement,
            handleBadIncrement,
          }}
        />
      </Section>
      <Section title="Statistics">
        {total <= 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <FeedbackStatistick
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}
