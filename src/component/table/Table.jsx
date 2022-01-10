import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBuilding, faEdit, faEnvelope, faPhoneAlt, faTimes} from "@fortawesome/free-solid-svg-icons";

const Table = ({user,handleConfirmShow,setNewUser,setShow,filter}) => {
    return (
        <div className='tableSection'>
            <table id='contacts'>
                <thead>
                <tr className='header'>
                    <th>Contact</th>
                    <th><FontAwesomeIcon icon={faEnvelope}/> Email</th>
                    <th><FontAwesomeIcon icon={faBuilding}/> Company</th>
                    <th><FontAwesomeIcon icon={faPhoneAlt}/> Phone Number</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {user.filter(item => item.firstName.toLowerCase().includes(filter.toLowerCase())).length === 0 ?
                    <p>sorry!</p> :
                    user.filter(item => item.firstName.toLowerCase().includes(filter.toLowerCase())).map(item => (

                        <tr key={item.id} className='rows'>
                            <td className='firstColumn'>
                                <div className='avatarStyles'>
                                    <img src={item.image} style={{width: '40px', borderRadius: '50%'}}
                                         alt={'avatar'}/>
                                </div>
                                <div style={{marginLeft: '20px'}}>
                                    <span>{item.firstName}</span>
                                    <span style={{marginLeft: '10px'}}>{item.lastName}</span>
                                </div>
                            </td>
                            <td>{item.email}</td>
                            <td>{item.company}</td>
                            <td>{item.phone}</td>
                            <td>
                                <button onClick={() => {
                                    setNewUser(item);
                                    setShow(true)
                                }}><FontAwesomeIcon icon={faEdit} color={'#406882'}/>
                                </button>
                                <button onClick={() => handleConfirmShow(item.id)}>
                                    <FontAwesomeIcon color={'#541212'} icon={faTimes}/>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    );
};

export default Table;
