import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 0 1.6rem;
    border-radius: 0.8rem;
    border: 1px dashed white;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT_100};
    
    svg {
        vertical-align: middle;
    }

    > button {
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > input {
        max-width: 13rem;
        height: 2.8rem;

        border: none;
        
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }

    }
`;
