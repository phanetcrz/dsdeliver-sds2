import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Alert, Text} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fetchOrders } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { OrderDTO } from '../types';

function Orders() {
    const [orders, setOrders] = useState<OrderDTO[]>([]); //--Processo de coleta dos dados vindos do endpoint usando o State do react, iniciando uma lista vazia []
    const [isLoading, setIsLoading] = useState(false);
    const navigator = useNavigation();
    const isFocused = useIsFocused(); //-- Será responsável pela atualização dos componentes na tela, ex: atualizar os dados após uma requisição put
                      //--obs: quando entra na tela ele é true e quando sai é false

    const fetchData = () => {
        setIsLoading(true);
        fetchOrders()
            .then(response => setOrders(response.data)) //o .then significa que já deu sucesso com isso passando o retorno para a variavel responde e se coloca response.data retorna apens o json da requisição ex: console.log(response.data)
            .catch(() => Alert.alert('Houve um erro ao buscar os pedidos'))  // Dica para tratamento de erro, fazer uso do "Alert" parecido com o showmessage do delphi
            .finally(() => setIsLoading(false));
    }

    useEffect(() =>{
        if (isFocused) {
            fetchData();
        }       
    },[isFocused]); //-- isFocused foi colocado como dependencia do useEffect

    const handleOnPress = ( order: OrderDTO) =>{
      navigator.navigate('OrderDetails', {
          order
      });
    }    

    return (
        <>
            <Header />
            <ScrollView style={styles.container}>
                {isLoading ? (                              //-- Condição ternária = enquanto (isLoading) estiver carregando mostra o texto ":" caso contrário executa o order.map 
                    <Text>Buscando pedidos... </Text>        
                ) : (
                    orders.map(order => (
                        //TouchableWithoutFeedback é um elemento clicável
                        <TouchableWithoutFeedback 
                            key={order.id} 
                            onPress={() => handleOnPress(order)}  //está gerando uma lista usando handleOnPress passando o objeto order por parametro, assim no clique será executado o pedido correto ao evento
                        >  
                            <OrderCard order={order} />
                        </TouchableWithoutFeedback>    
                    ))
                )}
            </ScrollView>    
        </>    
    );
}

const styles = StyleSheet.create({
    container:{
        paddingRight: '5%',
        paddingLeft: '5%',
    }
});

export default Orders;