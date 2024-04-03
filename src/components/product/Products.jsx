import { ContainerProd, BtnContainer } from "./productsStyle";
import {ProdData} from "../../data"
import Product from "./Product";


function Products() {

    console.log(Object.entries(ProdData))
    // console.log(ProdData)
    return (
    <>
        <ContainerProd>
            {ProdData.map(prod =>(
                <Product key={prod.id} {...prod}/>
            )
            )}
        </ContainerProd>
        
        <BtnContainer>
            <button className="btn"
            onClick={e => e.preventDefault()} secondary= 'true' disabled= 'true'>
                <span>Ver menos</span>
            </button>
            <button className="btn"
            onClick={e => e.preventDefault()} disabled='true'>
                    <span>Ver más</span>
            </button>
        </BtnContainer>
    </>
    )
}

export default Products