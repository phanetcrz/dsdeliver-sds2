export type OrderDTO = {
    id: number;
    address: string;
    latitude: number;
    longitude: number;
    moment: string;
    status: string; 
    total:number;   
    products: ProductDTO[];
}

export type ProductDTO ={
    id: number;
    name: string;
    price: number;
    description: string;
    imageUri: string;
}