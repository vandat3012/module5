import axios from "axios";

export const findAllProduct = async () => {
    const res = await axios.get("http://localhost:3000/products");
    return res.data;
}
export const createProduct = async (product) => {
    const res = await axios.post("http://localhost:3000/products/",product);
    return res.data;
}
export const findById = async (id) => {
    const res = await axios.get(`http://localhost:3000/products/${id}`);
    return res.data;
}
export const editProduct = async (product) => {
    const res = await axios.put(`http://localhost:3000/products/${product.id}`,product);
    return res.data;
}
export const deleteProduct = async (id) => {
    const res = await axios.delete(`http://localhost:3000/products/${id}`);
    return res.data;
}

