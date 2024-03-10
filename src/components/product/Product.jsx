import { CardProd } from "./productsStyle"


function Product({img,marc,model,type,year,color,price}) {
    return (
    <CardProd>
        <img src={img} alt={model} />
        <h2>{model}</h2>
        <h3>{marc}</h3>
        <p>Type: {type}</p>
        <p>Year: {year}</p>
        <p>Color: {color}</p>
        <span>Price: ${price}.00</span>
        <button>Add to Cart</button>
    </CardProd>
    )
}

export default Product