import styled from "styled-components";

export const HeroContainerStyle = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 100vw;
    height: 100vh;
    margin: 0 auto;
    gap: 30px; 
    background-image: url(https://mir-s3-cdn-cf.behance.net/project_modules/1400/0e7238191794895.65d1da9049a5e.jpg);
    background-size: 100vw;

    @media (max-width: 968px) {
        flex-direction: column;
    }
`;

export const HeroTextStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100vw;
    color: #F1ECBF;
    margin: 5px 100px  300px 100px;
    color: #050505;

    h1{
        font-size: 4rem;
        margin: 10px 0;
    }
    h2{
        font-size: 2.5rem;
        margin: 10px 0;
    }
    p{
        font-size: 1.2rem;
    }

    @media (max-width: 968px){
        width: 80%;
        align-items: center;
        text-align: center;
    };

`

export const HeroImg = styled.div`

    width: 40%;
    img{
        width: 100%;
        padding-bottom: 75px;
    }

    @media (max-width: 968px){
        display: none;
    }
`