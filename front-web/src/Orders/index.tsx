import { toast } from 'react-toastify';
import StepsHeader from './StepsHeader';
import ProdutsList from './ProductsList';
import React, { useEffect, useState } from 'react';
import { OrderLocationData, Product } from './types';
import { fetchProducts, saveOrder } from '../api';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import Footer from '../Footer';
import { checkIsSelected } from './helpers';
import './styles.css';

function Orders() {
    const [products, setProducts] = useState<Product[]>([]);//--useState([]) -  Inicializa com uma lista vazia
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);//--useState([]) -  Inicializa com uma lista vazia
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
    const totalPrice = selectedProducts.reduce((sum, item) => {
        return sum + item.price;
    },0)

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(() => {
                toast.warning('Erro ao listar produtos');
            })
    }, []);


    const handleSelectProduct = (product: Product) => {      //-- Função para pegar o produto selecionado
        const isAlreadySelected = checkIsSelected(selectedProducts, product);
      
        if (isAlreadySelected) {
          const selected = selectedProducts.filter(item => item.id !== product.id);
          setSelectedProducts(selected);
        } else {
          setSelectedProducts(previous => [...previous, product]);
        }
      }    

      const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        const payload = {
          ...orderLocation!,
          products: productsIds
        }
      
        saveOrder(payload)
            .then((response) => {
                toast.error(`Pedido enviado com sucesso! N° ${response.data.id}`);
                setSelectedProducts([]);
        })
          .catch(() => {
            toast.warning('Erro ao enviar pedido');
          })
      }      

    return (
        //utilizado o fragment por conter mais de um elemento 
        <> 
            <div className="orders-container">
                <StepsHeader />
                <ProdutsList 
                    products={products} 
                    onSelectProduct={handleSelectProduct}
                    selectedProducts={selectedProducts}
                />
                <OrderLocation 
                    onChangeLocation={Location => setOrderLocation(Location)} 
                />
                <OrderSummary 
                    amount={selectedProducts.length} 
                    totalPrice={totalPrice} 
                    onSubmit={handleSubmit}
                />
            </div>
            <Footer />
        </>
    )
}

export default Orders;