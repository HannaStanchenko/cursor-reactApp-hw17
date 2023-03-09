import "./contact.css"
import React from 'react';

const Contact = (props) => {
    const {firstName, lastName, phone, gender} = props.data;

    const setGenderIcon = () => {
        if(gender === "male") return (<i className="fi fi-rr-mars"></i>)
        else if (gender === "female") return (<i className="fi fi-rr-venus"></i>)
    }

    return (
        <div className='contacts_card'>
            <p>{setGenderIcon()} {firstName} {lastName}</p>
            <p>{phone}</p>
        </div>
    );
};

export default Contact;