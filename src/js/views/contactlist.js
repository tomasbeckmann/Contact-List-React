import React, { useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import Contact from '../component/contact';
import { Link } from "react-router-dom";

export function ContactList() {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.LoadContactData();
        console.log(store.contact);
    }, []);

    return (
        <div className="container flex-wrap">

            <p className="text-center title justify-content-center my-3">
                <h1>Contact List</h1>
                <Link className="btn btn-success mt-3" to="/contactform">
                    Add new contact
                </Link>
            </p>
            <div id="contacts" className="row" aria-expanded="true">
                <ul className="list-group col-" id="contact-list">
                    {store.contacts?.map((contact, index) => (
                        <Contact
                            key={index}
                            id={contact.id}
                            full_name={contact.full_name}
                            email={contact.email}
                            phone={contact.phone}
                            address={contact.address}
                            agenda_slug={contact.agenda_slug}
                        />
                    ))}
                </ul>
            </div>

        </div>
    );

}


