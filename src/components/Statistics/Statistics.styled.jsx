import styled from "styled-components";

export const TextStyle = styled.li`
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes.l};
    color: ${p => p.theme.colors.black};
`;

export const TotalRev = styled.li`
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes.l};
    color: ${p => p.theme.colors.white};  
`;

export const Percentage = styled.li`
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes.l};
    color: ${p => p.theme.colors.white};
`;