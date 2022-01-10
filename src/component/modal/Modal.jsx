import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCommentAlt, faVideo, faUserPlus} from '@fortawesome/free-solid-svg-icons'
import {Modal, Button} from "react-bootstrap";
import './modal.css'
import {faPhoneAlt} from "@fortawesome/free-solid-svg-icons/faPhoneAlt";
import Form from "./modalForm/form/Form";

const idMaker = () => {
    return Math.ceil(Math.random() * 1000)
}
export default function UseModal({newUser, setNewUser, setUser, user, show, setShow,}) {
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        setNewUser({image: '', firstName: '', lastName: '', email: '', company: '', phone: ''})
    }
    const handleAdd = (e) => {
        e.preventDefault()
        if (newUser.id) {
            setUser(user.map(item => item.id === newUser.id ? newUser : item))
        } else {

            setUser([...user, {id: idMaker(), ...newUser}])
        }

        setNewUser({firstName: '', lastName: '', email: '', company: '', phone: ''})
        setShow(false);
    }

    return (
        <div>
            <div>
            <Button className='buttonAdd' style={{backgroundColor:'#1A374D'}} onClick={handleShow}>
                Create New <FontAwesomeIcon icon={faUserPlus}/>
            </Button>
            </div>
            <Modal show={show} onHide={handleClose}  size={'md'||'sm'}>
                <div className='modal-title'>
                    <Modal.Title>
                        <div className='title-section'>
                        <div >
                            <img className='avatarStyleModal' src={newUser.image}/>
                        </div>
                        <div>
                            <p>{newUser.firstName} {newUser.lastName}</p>
                        </div>
                        </div>
                        <div className='iconSection'>
                            <div><FontAwesomeIcon icon={faPhoneAlt} size={"xs"}/><p>call</p></div>
                            <div><FontAwesomeIcon icon={faCommentAlt} size={"xs"}/><p>text</p></div>
                            <div><FontAwesomeIcon icon={faVideo} size={"xs"}/><p>video</p></div>
                        </div>
                    </Modal.Title>
                </div>
                <div className='modal-body'>
                    <Modal.Body>
                        <Form newUser={newUser} setNewUser={setNewUser}/>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button type={"submit"} variant="primary" onClick={handleAdd}>
                            add
                        </Button>
                    </Modal.Footer>
                </div>
            </Modal>
        </div>
    )
}
