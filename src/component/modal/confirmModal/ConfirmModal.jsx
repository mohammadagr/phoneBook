import {Modal, Button} from "react-bootstrap";
import {faExclamationTriangle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './confirmModal.css'
export default function ConfirmModal({setConfirmShow, confirmShow, user, setUser, deleteItem,firstName}) {
    const handleClose = () => setConfirmShow(false);
    const handleDelete = () => {
        setUser(user.filter(item => item.id !== deleteItem))
        setConfirmShow(false);
    }
    return (
        <div>
            <Modal show={confirmShow} onHide={handleClose}>
                <div className='confirmModal-header'>
                    <Modal.Header closeButton>
                        <FontAwesomeIcon icon={faExclamationTriangle}/>
                        Warning!!
                    </Modal.Header>
                </div>

                <div className='confirmModal-body'>
                    Are you sure to delete this item?
                </div>
                <div className='confirmModal-footer'>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            No
                        </Button>
                        <Button variant="danger" onClick={handleDelete}>
                            Yes
                        </Button>
                    </Modal.Footer>
                </div>
            </Modal>
        </div>
    )
}