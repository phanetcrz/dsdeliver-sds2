import ProductCard from "./ProductCard";
import { Product } from "./types";

type Props = { //--utilizado para passar parametro para o componente
    products: Product[];
}

function ProductsList({ products }: Props){
    return(
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product => (     //--Map vai tranformar uma lista em elementos html
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>    
        </div>    
    )
}

//dicas 
//"orders-list-items"> utilizado um display: grid; deixando mais semântico
export default ProductsList;