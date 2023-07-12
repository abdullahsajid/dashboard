import axios from 'axios';
const URL = "http://localhost:3001/api/order";

const postOrder = async (orders) => {
    const response = await axios.post(`${URL}/post-order`, orders);
    return response.data;
}

const getOrders = async () => {
    const response = await axios.get(`${URL}/get-orders`);
    return response.data;
}

const getSingleOrder = async (order_id) => {
    const response = await axios.get(`${URL}/get-single-order/${order_id}`)
    return response.data;
}

const updateStatus = async (order_id, status) => {
    const response = await axios.put(`${URL}/update-status/${order_id}`, status);
    return response.data
}


const orderService = {
    postOrder,
    getOrders,
    getSingleOrder,
    updateStatus
    

}


export default orderService