import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {deleteProduct, findAllProduct} from "../service/ProductService";
import {Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import DeleteModal from "./DeleteModal";

export default function ProductApp() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const [idDelete, setIdDelete] = useState();
    const [show, setShow] = useState(false);

    useEffect(() => {
        getAllProduct();
    }, []);
    const getAllProduct = () => {
        findAllProduct().then((res) => {
            setProducts(res)
        })
    };
    const handleCreate = () => {
        navigate("/products/create")
    }
    const handleEdit = (id) => {
        navigate(`/products/edit/${id}`)
    }
    const handle2 = (id) => {
        navigate(`/products/${id}`)
    }
    const handleDelete = () => {
        deleteProduct(idDelete).then((res) => {
            getAllProduct();
        })
    }
    const handModal = (id) => {
        setIdDelete(id);
        setShow(true);
    }
    return (
        <>
            <div style={{padding: "50px"}}>
                <h1>List Product</h1>
                <button onClick={handleCreate}>Create</button>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        products.map((pr, index) => (
                            <tr key={pr.id}>
                                <td>{index + 1}</td>
                                <Link to={`/products/${pr.id}`} ><td>{pr.title}</td> </Link>
                                <td>{pr.description}</td>
                                <td>{pr.price}</td>
                                <td><Button variant="danger" onClick={() => handModal(pr.id)
                                }>
                                    Delete</Button></td>
                                <td><Button variant="danger" onClick={() =>
                                    handleEdit(pr.id)
                                }>
                                    Edit</Button></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
                <DeleteModal
                    show={show}
                    setShow={setShow}
                    handleDelete={handleDelete}
                ></DeleteModal>
            </div>

        </>
    )
}