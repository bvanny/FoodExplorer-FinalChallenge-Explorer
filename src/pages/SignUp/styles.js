import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    max-width: 110.6rem;
    height: 100vh;
    
    margin: auto;
    padding: 14.2rem 4rem;
    
    justify-content: space-between;
    align-items: center;

    @keyframes moveForm {
        0% {
            opacity:0;
            transform: translateX(100px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes moveLogo {
        0% {
            transform: scale(1);
        }
        25% {
            transform: scale(1);
        }
        30% {
            transform: scale(1.1);
        }
        50% {
            transform: scale(1);
        }
        60% {
            transform: scale(1.1);
        }
        75% {
            transform: scale(1);
        }
        100% {
            transform: scale(1);
        }
        
    }

    @media only screen and (min-width: 768px) {
        flex-direction: row;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    
    max-width: 47.6rem;
    width: 100%;
    
    padding: 6.4rem;
    border-radius: 1.6rem;

    background-color: ${({ theme }) => theme.COLORS.BLUE_200};

    animation: moveForm 1s forwards;

    > h2 {
        font-family: 'Poppins', sans-serif;
        font-size: 3.2rem;
        font-weight: 500;
        line-height: 6.8rem;
        text-align: center;
        
        margin-bottom: 3.2rem;
    }

    > a {
        margin-top: 3.2rem;
        
        text-align: center;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > .inputs {
        margin-bottom: 3.2rem;
    }

    > .inputs p {
        font-size: 1.6rem;
        margin-bottom: 0.8rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 4rem;
    animation: moveLogo ease-in infinite 1s forwards;

    h1 {
        font-size: clamp(3rem, 3rem + 1.5vw, 4.248rem);
        white-space: nowrap;
    }

    .logo {
        display: flex;
        gap: 1.9rem;
    }

    svg {
        height: 5rem;
        width: 5rem;
    }
`;