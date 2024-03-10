import styled from "styled-components";


export const ContainerProd = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;   
    align-items: center;  
    margin: 10px; 
    gap: 5px;

`


export const CardProd = styled.div `
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 380px;
    border-radius: 8px;
    overflow: hidden;

    button{
        width: 50px;
        height: 25px;
        background: #ff6b6c;
        color: white;
        font-weight: bold;
        text-align: center;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
`