import React, { useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import "/workspaces/Contact-List-React/src/js/component/contact.css"
import { useNavigate } from 'react-router-dom';

function Contact({ index, id, full_name, email, phone, address, agenda_slug }) {

    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const handleDelete = async (event) => {
        actions.fetchDelete(id);
        window.location.reload();
    };

    const handleUpdate = async (event) => {
        navigate(`/updateform/${id}`);
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
                    <a onClick={handleDelete} role="button" className="text-danger" data-toggle="tooltip" title="" data-original-title="Delete"><i className="far fa-trash-alt"></i></a>
                    <a onClick={handleUpdate} role="button" className="text-primary" data-toggle="tooltip" title="" data-original-title="Delete"><i className="fa-solid fa-pencil"></i></a>

                </div>
            </div>
        </>
    )
}

export default Contact


