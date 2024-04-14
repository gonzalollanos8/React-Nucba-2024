import styled from "styled-components";

export const FooterStyle = styled.div`
    background: #F1ECBF;
    display: flex;
    justify-content: space-around;
    align-items: start;
    width: 100vw;
    color: #050505;
`

export const FooterColumn = styled.div`
    margin: 2rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;


    li{
        text-align: start;
        cursor: pointer;
        font-size: 16px;
        font-weight: 600;

        .links{
            text-decoration: underline dotted;
        }
    }
`

export const SocialMedia = styled.div`
    display: flex;
    gap: 10px;
    font-size: 40px;
    align-items: center;
    justify-content: space-around;
    width: 200px;
    cursor: pointer;
`
