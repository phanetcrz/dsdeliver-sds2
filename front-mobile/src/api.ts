import axios from "axios";

//const API_URL = 'http://10.0.0.152:8080'; 
const API_URL = 'https://phanet-aulas-sds2.herokuapp.com';

export function fetchOrders(){
    return axios(`${API_URL}/orders`)
}

export function confirmDelivery(orderId: number){
    return axios.put(`${API_URL}/orders/${orderId}/delivered`)
}