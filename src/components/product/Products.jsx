import { ContainerProd, BtnContainer, SectionTitle } from "./productsStyle";
import {ProdData} from "../../data"
import Product from "./Product";


function Products() {

    console.log(Object.entries(ProdData))
    // console.log(ProdData)
    return (
    <>
        <SectionTitle>
        <h2 className="sectionTitle">Cars</h2>
        </SectionTitle>
        <ContainerProd>
            {ProdData.map(prod =>(
                <Product key={prod.id} {...prod}/>
            )
            )}
        </ContainerProd>
        
        <BtnContainer>
            <button className="btn"
            onClick={e => e.preventDefault()} secondary= 'true' disabled= 'true'>
                <span>See less</span>
            </button>
            <button className="btn"
            onClick={e => e.preventDefault()} disabled='true'>
                    <span>See more</span>
            </button>
        </BtnContainer>
    </>
    )
}

export default Products