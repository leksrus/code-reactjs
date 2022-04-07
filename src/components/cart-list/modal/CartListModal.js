import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import {useCartContext} from "../../../context/CartContext";


function CartListModal({show, onHide, order, onCompleteOrder, message}) {
    const {cartList} = useCartContext();
    const completeOrder = () => {
        onCompleteOrder();
        onHide();
    }
    return (
            <Modal show={show} onHide={onHide} size="lg"
                   aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title>Order check out</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        !order ? <h5>{message}</h5> :
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    cartList.map((x, i) => {
                                        return (<tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{x.name}</td>
                                            <td>{x.quantity}</td>
                                            <td>$ {x.price}</td>
                                        </tr>)
                                    })
                                }
                                </tbody>
                            </Table>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={onHide}>
                        Close
                    </Button>
                    <Button variant="outline-success" onClick={completeOrder}>
                        Checkout
                    </Button>
                </Modal.Footer>
            </Modal>
    );
}

export  default CartListModal;