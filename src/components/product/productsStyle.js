import styled from "styled-components";


export const ContainerProd = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;   
    align-items: center;  
    padding: 10px; 
    width: 80vw;
`


export const CardProd = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 400px;
    border-radius: 10px;
    border: #ff6b6c solid 1px;
    padding: 20px;
    margin: 10px 0px;
    gap: 10px;

    button{
        width: 50px;
        height: 50px;
        background: #ff6b6c;
        color: white;
        font-weight: bold;
        text-align: center;
        border: none;
        border-radius: 100px;
        cursor: pointer;
    }

    img{
        width: 80%;
        height: 160px;
        object-fit: cover;
    }

    .title{
        border-top: #ff6b6c 1px solid;
        border-bottom: #ff6b6c 1px solid;
        
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
        border-bottom: #ff6b6c 1px solid;
    }

    .prices{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
    }
    
`

export const BtnContainer = styled.div`

width: 25vw;
display: flex;
justify-content: center;
gap: 25px;

        .btn {
display: inline-block;
padding: 0.9rem 1.8rem;
font-size: 16px;
font-weight: 700;
color: white;
border: 3px solid rgb(252, 70, 100);
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
background-color: rgb(252, 70, 100);
transform: translateX(-100%);
transition: all .3s;
z-index: -1;
}

.btn:hover::before {
transform: translateX(0);
}
`