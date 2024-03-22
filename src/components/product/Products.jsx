import Product from "./Product";
import { ContainerProd } from "./productsStyle";
import {prodData} from "../../data/product"


function Products() {
    return (
    <>
        <ContainerProd>
            {prodData.map(prod =>(
                <Product  key={prod.id} {...prod}/>
            )
            )}
        </ContainerProd>
        
        <button 
        onClick={e => e.preventDefault()} secondary= 'true' disabled= 'true'>
            <span>Ver menos</span>
        </button>
        <button onClick={e => e.preventDefault()} disabled='true'>
                <span>Ver más</span>
        </button>
    </>
    )
}

export default Products