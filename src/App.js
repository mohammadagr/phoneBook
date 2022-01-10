import {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBuilding, faEdit, faEnvelope, faPhoneAlt, faTimes, faUser} from "@fortawesome/free-solid-svg-icons";
import UseModal from "./component/modal/Modal";
import ConfirmModal from "./component/modal/confirmModal/ConfirmModal";
import './component/table/table.css'
import SearchBox from "./component/searchBox/SearchBox";
import Table from "./component/table/Table";
import {data} from './component/data/Data'


export default function App() {

  const [filter, setFilter] = useState('')
  const [deleteItem, setDeleteItem] = useState()
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [edit, setEdit] = useState()
  const [user, setUser] = useState(data)
  const [newUser, setNewUser] = useState({image: '', firstName: '', lastName: '', email: '', company: '', phone: ''})
  const [confirmShow, setConfirmShow] = useState(false);
  const handleConfirmShow = (id,firstName,lastName) => {
    setConfirmShow(true);
    setDeleteItem(id)
    setFirstName(firstName)
    setLastName(lastName)
  }


  return (
      <div className='mainContainer'>
        <SearchBox setFilter={setFilter}/>
          <div>
              <UseModal setEdit={setEdit} user={user} setUser={setUser}
                        newUser={newUser} setNewUser={setNewUser}
                        show={show} setShow={setShow}/>
          </div>
        <ConfirmModal confirmShow={confirmShow} setConfirmShow={setConfirmShow}
                      handleConfirmShow={handleConfirmShow} setDeleteItem={setDeleteItem} user={user}
                      setUser={setUser} deleteItem={deleteItem} firstName={firstName}/>
        <Table filter={filter} user={user} setNewUser={setNewUser} setShow={setShow}
               handleConfirmShow={handleConfirmShow}/>


      </div>
  )
}