import styled from "styled-components";

export const FooterStyle = styled.div`
    background: red;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    color: white;
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
    }
`