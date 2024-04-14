import { CardProd } from "./productsStyle"
import { BsCartPlusFill } from "react-icons/bs";


function Product({img,marc,model,type,year,color,price}) {
    return (
    <CardProd>
        <img src={img} alt={model} />
        <div className="product-info">
            <div className="title">
                    <h2>{marc} {model}</h2>
                    
            </div>
            <div className="info">
                    <p>Type: {type}</p>
                    <p>Year: {year}</p>
                    <p>Color: {color}</p>
            </div>
            <div className="prices">
                    <span>Price: ${price}.00</span>
                    <button><BsCartPlusFill /></button>
            </div>
        </div>
    </CardProd>
    )
}

export default Product