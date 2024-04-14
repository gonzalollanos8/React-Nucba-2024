import styled from "styled-components";
import { BsFillPersonFill } from "react-icons/bs";



export const Header = styled.header`
    background: #393838;
    height: 60px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:  0 30px 0 30px;

    img{
        height: 50px;
        /* margin-left: 30px; */
    }
    .menu-list{
        display: flex;
        gap: 5rem;

        a:hover{
            color: #F1ECBF;
            font-weight: bold;
            animation-delay: 3ms;
        }
    }

    .user-button{
        gap: 10px;
        /* margin-right: 30px; */
    }

    button{
        width: 30px;
        height: 30px;
        border-radius: 100%;
        margin: 10px;
        background-color: #393838;
        color: white;
        font-size: 24px;
        background:none;
        border: none;

        & :hover{
            color: #F1ECBF;
            font-weight: bold;
        }
    }
    `