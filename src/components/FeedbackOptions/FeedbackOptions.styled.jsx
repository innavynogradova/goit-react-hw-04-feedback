import styled from "styled-components";

export const Button = styled.button`
    width: 100px;
    padding-top: ${p => p.theme.space[4]}px;
    padding-bottom: ${p => p.theme.space[4]}px;
    background-color: ${p => p.theme.colors.grey};
    color: ${p => p.theme.colors.black};
    border-radius: ${p => p.theme.radii.sm};
    border: none;
    font-family: ${p => p.theme.fonts.body};
    letter-spacing: 1.5px;
    
    :hover {
        background-color: ${p => p.theme.colors.primary};
        color: ${p => p.theme.colors.white};
    }
`;