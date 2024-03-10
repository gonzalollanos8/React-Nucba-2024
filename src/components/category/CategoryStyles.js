import styled from "styled-components";


export const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7rem;
    background-color: red;
`

export const CategoryWrap  = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
`

export const CategoryCard = styled.div`
    border: 2px solid #e5e5e5;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    height: 150px;
`