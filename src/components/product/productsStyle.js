import styled from "styled-components";


export const ContainerProd = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;   
    align-items: center;  
    padding: 10px; 
    margin: 10px;

`


export const CardProd = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 380px;
    border-radius: 10px;
    border: #ff6b6c solid 1px;
    padding: 20px;
    margin: 10px 0px;

    button{
        width: 100px;
        height: 50px;
        background: #ff6b6c;
        color: white;
        font-weight: bold;
        text-align: center;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    img{
        width: 80%;
        height: 50%;
        object-fit: cover;
    }

    .title{
        h2{
            color: #ff6b6c;
        }
        h3{
            font-size: 16px;
        }
    }

    .info{
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
    
`