import styled from "styled-components";

export const SectionStyle = styled.section`
  padding: ${props => props.theme.space[5]}px;
`;

export const SectionTitle = styled.h2`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.xl};
  margin-bottom: ${p => p.theme.space[5]}px;
`;