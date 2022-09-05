import { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";
// import { Box } from "./Box";

import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";



export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleClick = (key) => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return  Math.round((good / total) * 100 );
  };

  render() {
    
    const { good, neutral, bad } = this.state;
    const {
      handleClick,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    const reviewRate = Object.keys(this.state);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={reviewRate} onLeaveFeedback={handleClick} />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() > 0
          ? (<Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />)
          : (<Notification message="There is no feedback" />)}
        </Section>
        <GlobalStyle />
      </>
    )
};
}
