import styled from "styled-components";


export const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-around;
    background-color: #222222;
    width: 100vw;
    height: 100vh;

    .sectionTitle{
        font-family: "Poppins", sans-serif;
        color: white;
        font-weight: 800;
        font-size: 90px;
        margin: 10px 10px 10px 120px;
    }
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
    justify-content: center;
    height: 400px;
    width: 300px;
    border: 5px solid #F1ECBF;
    border-radius: 10px;
    background-color: #2222;

    h2{
        
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-size: 60px;
        font-style: normal;
        color: #F1ECBF;
    }

    img{
        width: 80%;
        margin-top: 100px;
    }
`