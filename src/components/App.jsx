import { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
// import { Box } from "./Box";

import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const handleClick = (type) => {
    
    switch (type) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        new Error ('The type not found');
    }
  };

  const total = good + neutral + bad;

  const positivePercentage = Math.round((good / total) * 100 );

  const options = Object.keys({ good, neutral, bad });

  return (

      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
        </Section>
        <Section title="Statistics">
          {total > 0
          ? (<Statistics 
              good={good} 
              neutral={neutral} 
              bad={bad} 
              total={total} 
              positivePercentage={positivePercentage} />)
          : (<Notification message="There is no feedback" />)}
        </Section>
        <GlobalStyle />
      </>
  );
}
