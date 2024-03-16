import { CardProd } from "./productsStyle"


function Product({img,marc,model,type,year,color,price}) {
    return (
    <CardProd>
        <img src={img} alt={model} />
        <div className="product-info">
            <div className="title">
                    <h2>{model}</h2>
                    <h3>{marc}</h3>
            </div>
            <div className="info">
                    <p>Type: {type}</p>
                    <p>Year: {year}</p>
                    <p>Color: {color}</p>
            </div>
            <div className="prices">
                    <span>Price: ${price}.00</span>
                    <button> + Cart</button>
            </div>
        </div>
    </CardProd>
    )
}

export default Product