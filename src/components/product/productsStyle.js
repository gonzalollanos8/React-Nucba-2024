import styled from "styled-components";

export const SectionTitle = styled.div`
        width: 100vw;
        display: flex;
        justify-content: space-around;
        align-items: stretch;
        font-family: "Poppins", sans-serif;
        color: white;
        font-weight: 800;
        font-size: 90px;
        margin: 0px 800px 0px 0px;
`

export const ContainerProd = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;   
    align-items: center;  
    width: 80vw;
`


export const CardProd = styled.div `
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 300px;
    height: 400px;
    border-radius: 10px;
    border: #585858 solid 5px;
    /* padding: 20px; */
    margin: 10px 0px;
    gap: 10px;

    button{
        width: 50px;
        height: 50px;
        background: #BDFF9D;
        color: white;
        font-size: 25px;
        text-align: center;
        border: none;
        border-radius: 100px;
        cursor: pointer;
    }

    img{
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    .title{
        margin-left: 15px;
        margin-top: -20px;
        h2{
            color: white;
        }
        h3{
            font-size: 16px;
        }
    }

    .info{
        color: white;
        display: flex;
        flex-direction: column;
        font-weight: 200;
        font-size: 14px;
        align-items: start;
        line-height: 5px;
        margin-left: 25px;
        margin-top: -20px;
    }

    .prices{
        width: 260px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: white;
        font-weight: 800;
        padding: 0 24px;
        
    }
    
`

export const BtnContainer = styled.div`

width: 25vw;
display: flex;
justify-content: center;
gap: 25px;
margin-bottom: 50px;

    .btn {
        display: inline-block;
        padding: 0.9rem 1.8rem;
        font-size: 16px;
        font-weight: 700;
        color: white;
        border: 3px solid #F1ECBF;
        border-radius: 5px;
        cursor: pointer;
        position: relative;
        background-color: transparent;
        text-decoration: none;
        overflow: hidden;
        z-index: 1;
        font-family: inherit;
}

    .btn::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #F1ECBF;
        color: #050505;
        transform: translateX(-100%);
        transition: all .3s;
        z-index: -1;
}

    .btn:hover::before {
        transform: translateX(0);
        color: #050505;
    }
`