import React from 'react';
import './Form.css'
import { useState } from 'react';

const Form = () => {
    const [Value, setValue] = useState({
        firstName:"",
        lastName:"",
        email:""
    });

    const handleFirstNameInput = (event) => {
        setValue({...Value, firstName:event.target.value})
    }
    const handleLastNameInput = (event) => {
        setValue({...Value, lastName:event.target.value})
    }
    const handleEmailInput = (event) => {
        setValue({...Value, email:event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);

    }


    const [submitted, setSubmitted] = useState(false);
    return(
        <div className='formMain'>
            <h1 className='formLogo'>Login Form</h1>
            <form className='formInput' onSubmit={handleSubmit}>
                {submitted ? <p className='success-submitted'> Congrats! Log in successful.</p>: null }
                <input onChange={handleFirstNameInput} className='firstNameInput' type='text' placeholder='first name' value={Value.firstName} required></input>
                <input onChange={handleLastNameInput} className='lastNameInput' type='text' placeholder='last name' value={Value.lastName} required></input>
                <input onChange={handleEmailInput} className='emailInput' type='email' placeholder='email' value={Value.email} required></input>
                <button  className='formButton'>Enter</button>
            </form>
        </div>
    );
};

export default Form;