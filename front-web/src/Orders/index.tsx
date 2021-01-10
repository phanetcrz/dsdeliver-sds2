import './styles.css';
import StepsHeader from './StepsHeader';
import ProdutsList from './ProductsList';
import { useEffect, useState } from 'react';
import { OrderLocationdata, Product } from './types';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';

function Orders(){
    const[products, setProducts] = useState<Product[]>([]);//--useState([]) -  Inicializa com uma lista vazia
    const[orderLocation, setOrderLocation] = useState<OrderLocationdata>();
    
    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
    }, []);

    return(
        <div className="orders-container">
            <StepsHeader />
            <ProdutsList products={products} />
            <OrderLocation onChangeLocation={Location => setOrderLocation(Location)} />
        </div>    
    )
}

export default Orders;