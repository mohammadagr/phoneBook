import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBuilding, faEnvelope, faUser} from "@fortawesome/free-solid-svg-icons";
import {faPhoneAlt} from "@fortawesome/free-solid-svg-icons/faPhoneAlt";
import './form.css'
const Form = ({newUser,setNewUser}) => {
    const handleChange = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value})
    }
    return (
        <form className='popUpModal'>
            <div>
                <label htmlFor={'firstName'}><FontAwesomeIcon icon={faUser}/>
                    <input placeholder={'firstName'} id={'firstName'} type='text' name={'firstName'}
                           onChange={handleChange}
                           value={newUser.firstName}/>
                </label>
            </div>
            <div>
                <label htmlFor={'lastName'}>
                    <input placeholder={'lastName'} id={'lastName'} type='text' name={'lastName'}
                           onChange={handleChange}
                           value={newUser.lastName}/>
                </label>
            </div>
            <div>
                <label htmlFor={'email'}><FontAwesomeIcon icon={faEnvelope}/>
                    <input placeholder={'email'} id={'email'} type='text' name={'email'}
                           onChange={handleChange}
                           value={newUser.email}/>
                </label>
            </div>
            <div>
                <label htmlFor={'company'}><FontAwesomeIcon icon={faBuilding}/>
                    <input placeholder={'company'} id={'company'} type='text' name={'company'}
                           onChange={handleChange}
                           value={newUser.company}/>
                </label>
            </div>
            <div>
                <label htmlFor={'phone'}><FontAwesomeIcon icon={faPhoneAlt}/>
                    <input placeholder={'phone'} id={'phone'} type='text' name={'phone'}
                           onChange={handleChange} value={newUser.phone}/>
                </label>
            </div>
        </form>
    );
};

export default Form;
