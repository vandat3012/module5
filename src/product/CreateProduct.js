import {useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {createProduct} from "../service/ProductService";

export default function CreateProduct() {
    const navigate = useNavigate();
    return(
        <>
        <div>
            <h1>Create Product</h1>
            <Formik initialValues={{
                title : "",
                description: "",
                price: 0
            }} onSubmit={(values)=>{
                const product1 = {...values
            }
            createProduct(product1).then((res)=>{
                navigate("/")
            })
            }}>
                <Form>
                    <div>
                        <label htmlFor="title"></label>
                        <Field name="title" type="text"></Field>
                    </div>
                    <div>
                        <label htmlFor="description"></label>
                        <Field name="description" type="text"></Field>
                    </div>
                    <div>
                        <label htmlFor="price"></label>
                        <Field name="price" type="text"></Field>
                    </div>
                    <button>Save</button>
                </Form>
            </Formik>
        </div>
        </>
    )
}