import React, { useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import "/workspaces/Contact-List-React/src/js/component/contact.css"

function Contact({ index, id, full_name, email, phone, address, agenda_slug }) {
    const { store, actions } = useContext(Context);

    const handleDelete = async (event) => {
        actions.fetchDelete(id);
        window.location.reload();
    };

    return (
        <>
            <div className="card col-3">
                <div className="photo"></div>
                <div className="contact-info">
                    <h2>{full_name}</h2>
                    <p>{email}</p>
                    <p>{phone}</p>
                    <p>{address}</p>
                    <a onClick={handleDelete} className="text-danger" data-toggle="tooltip" title="" data-original-title="Delete"><i className="far fa-trash-alt"></i></a>
                </div>
            </div>
        </>
    )
}

export default Contact


