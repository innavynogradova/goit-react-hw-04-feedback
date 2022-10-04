import PropTypes from "prop-types";
import { Box } from "components/Box";
import { TextStyle, TotalRev, Percentage } from "./Statistics.styled";

export const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
    return (
        <Box as="div" display='inline-block' ml='auto' mr='auto'>
            <Box as="ul" display='flex' flexDirection='column' alignItems='flex-start'>
                    <TextStyle>Good: {good}</TextStyle>
                    <TextStyle>Neutral: {neutral}</TextStyle>
                    <TextStyle>Bad: {bad}</TextStyle>
                    <TotalRev>Total: {total}</TotalRev>
                    <Percentage>Positive feedback: {positivePercentage}%</Percentage>
            </Box>
        </Box>
        
    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};