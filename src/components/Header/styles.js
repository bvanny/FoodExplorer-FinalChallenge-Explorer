import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
    display: flex;
    
    width: 100%;
    
    position: sticky;
    top: 0;
    z-index: 999;
    
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    .adminLogo {
        text-align: end;
        color: ${({ theme }) => theme.COLORS.BLUE_100};
    }

`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
    
    width: 121.2rem;
    height: 12.4rem;
    
    padding: 0 4rem;
    gap: 3.2rem;

    .nav-menu {
        display: flex;
        justify-content: space-between;
        
        width: 100%;
        gap: 3.2rem;
    }

    .hamburger {
        display: none;
    }

    .bar {
        display: block;
        
        width: 25px;
        height: 3px;
        margin: 5px auto;
        
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        background-color: ${({ theme }) => theme.COLORS.WHITE};
    }

    @media only screen and (max-width: 768px) {
        max-width: 768px;

        .nav-menu {
            flex-direction: column;
            align-items: center;
            text-align: center;
            
            position: fixed;
            left: -100%;
            top: 10.4rem;
            z-index: 9999;
            
            width: 100%;
            height: 35rem;
            gap: 2rem;
            padding: 5rem 5rem 3rem;
            border-radius: 0 0 2rem 2rem;
            
            transition: 0.3s;
            
            background-color: ${({ theme }) => theme.COLORS.BLUE_200};
        }

        

        .nav-menu.active {
            left: 0;
        }

        .nav-item {
            margin: 2.5rem 0;
        }

        .hamburger {
            display: block;
            cursor: pointer;
        }

        .hamburger.active .bar:nth-child(2) {
            opacity: 0;
        }

        .hamburger.active .bar:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }

        .hamburger.active .bar:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.WHITE};
    
    h1 {
        font-size: 2.51109rem;
        animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    }
    
    .logo img:hover {
        -webkit-animation: rotate-center 0.6s ease-in-out both;
        animation: rotate-center 0.6s ease-in-out both;
    }
    
    a {
        display: flex;
        gap: 1.123rem;

        text-decoration: none;
        color: inherit;
    }
`;

export const Search = styled.div`
    align-self: center;
    border-radius: 5px;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    @media only screen and (max-width: 768px) {
        width: 50%;
        transform: translateY(-50px);
        min-width: 300px;
    }

    input {
        width: 100%;
        height: 4.8rem;

        padding: 1.6rem;
        border: 0;

        color: ${({ theme }) => theme.COLORS.GRAY_200};
        background: transparent;

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_200};
        }
    }

    label {
        position: relative;
        display: flex;
        align-items: center;
        padding-left: 1.6rem;
    } 

    svg {
        color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    max-width: 216px;
    height: 5.6rem;
    
    border: none;
    border-radius: 0.5rem;
    
    gap: 1.1rem;
    
    font-size: 1.4rem;

    background-color: ${({ theme }) => theme.COLORS.RED_100};
    color: ${({ theme }) => theme.COLORS.WHITE};

    padding: 0 3rem;

    @media (min-width: 768px) {
        max-width: 21.6rem;
    }
`;

export const Logout = styled(Link)`
    display: flex;
    align-self: center;
    
    border: none;
    background: none;
    
    > svg {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 3.2rem;
    }

    > svg:hover {
        animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }
`;

export const Profile = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    background: none;
    cursor: pointer;

    @media only screen and (max-width: 768px) {
        > div {
            display: flex;
            flex-direction: column;
            display: flex;
            gap: 1.2rem;
            button {
                font-size: 2rem;
                background-color: ${({ theme }) => theme.COLORS.BLUE_300};
                padding: .5rem;
                width: 230px;
            }
        }

        top: 45%;
    }
    
`;

export const ButtonMenu = styled.button`
    padding: 0 3rem;    

    border: none;
    border-radius: 0.5rem;
    font-size: 1.4rem;

    color: ${({ theme }) => theme.COLORS.BLUE_100};
    background-color: transparent;

`;