import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import { findById} from "../service/ProductService";
import {Field, Form, Formik} from "formik";
import {Table} from "react-bootstrap";

export default function Information() {
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
    const handle3 = () => {
        navigate("")
    }

    if (!products) return null

    return(
        <>
            <div>
                <h1>Information</h1>
                <Formik initialValues={products}
                        onSubmit={(values) => {
                            navigate("/")
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
                            <button onClick={() =>
                                handle3()
                            }>Return</button>
                        </Table>
                    </Form>

                </Formik>

            </div>
        </>
    )
}