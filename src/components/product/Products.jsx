import Product from "./Product";
import { ContainerProd } from "./productsStyle";
import {prodData} from "../../data/product"


function Products() {
    return (
        <ContainerProd>
            {prodData.map(prod =>(
                <Product  key={prod.id} {...prod}/>
            )
            )};
        </ContainerProd>

    )
}

export default Products