import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import { Field, Form, Formik} from "formik";
import {Table} from "react-bootstrap";
import {editProduct, findById} from "../service/ProductService";

export default function EditProduct() {
    const [products,setProduct] = useState();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        const { id } = params;
        console.log(id)
        if (params && id) {
            findById(id).then((res) => {
                const p = {...res}
                console.log(p)
                setProduct(p)
            });
        }
    }, [params]);
    const handle1 = () => {
        navigate("/")
    }

    if (!products) return null

    return(
        <>
            <div>
                <h1>Edit</h1>
                <Formik initialValues={products}
                        onSubmit={(values) => {
                            const productObj = {...values};
                            editProduct(productObj).then((res) => {
                                navigate("/");
                            });
                        }}
                >
                    <Form>
                        <Table striped bordered hover>
                            <div>
                                <label htmlFor="title"> Name : </label>
                                <Field name = "title" type ="text"></Field>
                            </div>
                            <div>
                                <label htmlFor="description"> Description : </label>
                                <Field name = "description" type ="text"></Field>
                            </div>
                            <div>
                                <label htmlFor="price"> Price : </label>
                                <Field name = "price" type ="text"></Field>
                            </div>
                            <button>Save</button>
                            <button onClick={() =>
                                handle1()
                            }>Return</button>
                        </Table>
                    </Form>

                </Formik>

            </div>
        </>
    )
}