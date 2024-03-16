import styled from "styled-components";


export const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: red;
    width: 100vw;
`

export const CategoryWrap  = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    gap: 1rem;
    padding: 50px;
`

export const CategoryCard = styled.div`
    /* border: 2px solid #e5e5e5; */
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    border-radius: 10px;
    background-color: #ffff;


    img{
        width: 80%;
    }
`