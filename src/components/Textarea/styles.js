import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 17.2rem;
    padding: 1.4rem;

    border-radius: 0.5rem;
    border: none;

    
    resize: none;
    
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_200};
    }


`;
