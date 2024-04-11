import {Modal, ModalFooter} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function DeleteModal(props) {
const {show,setShow,handleDelete} = props;
const handClose = () => setShow(false);
const handDelete = () => {
    handleDelete();
    handClose();
};
return(
    <>
    <Modal show={show} onHide={handClose}>
        <Modal.Header>
        </Modal.Header>
        <Modal.Body>Do you want to delete</Modal.Body>
        <ModalFooter>
            <Button variant="secondary" onClick={handClose}>Close</Button>
            <Button variant="danger" onClick={handDelete}>Delete</Button>
        </ModalFooter>
    </Modal>
    </>
)
}
