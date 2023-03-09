import "./contacts.css"
import React from 'react';
import { useState } from 'react';
import listOfContacts from './listOfContacts.js'
import Contact from './Contact.js';
import Checkbox from "./Checkbox";

const Contacts = () => {
    const [male, setMale] = useState(true);
    const [female, setFemale] = useState(true);
    const [unknown, setUnknown] = useState(true);
    const maleHandler = () => {
        setMale(!male);
    };
    const femaleHandler = () => {
        setFemale(!female);
    };
    const unknownHandler = () => {
        setUnknown(!unknown);
    };

    const [state, setState] = useState(listOfContacts);
    const handleSearchChange = (event) => {
        const query = event.target.value;
        let updatedList = [...listOfContacts];
        updatedList = updatedList.filter((item) => {
            const res = Object.values(item).map((e) => e.toLowerCase().indexOf(query.toLowerCase()) !== -1);
            if (res.includes(true)) return item
        });
        setState(updatedList)
    };  

    return (
        <div className="main">
            <div className="search-field">
                <input  onChange={handleSearchChange} type="text" />

                <Checkbox
                    label="чоловік"
                    value={male}
                    onChange={maleHandler}
                />

                <Checkbox
                    label="жінка"
                    value={female}
                    onChange={femaleHandler}
                />

                <Checkbox
                    label="не вказано"
                    value={unknown}
                    onChange={unknownHandler}
                />
            </div>

            <div className="contacts">
                {
                    state.filter((i) => {
                        if(
                            (i.gender === "male" && male) ||
                            (i.gender === "female" && female) ||
                            (!i.gender && unknown)
                        ) 
                        return true
                    }).map((contact, i) => {
                        return <Contact key={i} data={contact} />
                    })
                }
            </div>
        </div>

    );
};

export default Contacts;