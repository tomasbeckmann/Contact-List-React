import React, { useState, useContext } from 'react';
import { Context } from "/workspaces/Contact-List-React/src/js/store/appContext.js"


export const ContactForm = () => {
  const { actions } = useContext(Context)


  const handleSubmit = async (event) => {

    event.preventDefault();

    const inputData = Object.fromEntries(new FormData(event.target));
    console.log(Object.fromEntries(new FormData(event.target)));
    actions.ContactForm(inputData);
    console.log(inputData)


  };

  return (
    <div className="container">
      <div>
        <h1 className="text-center mt-5">Add a new contact</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="fullname" className="form-control" placeholder="Full Name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" className="form-control" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="phone" name="phone" className="form-control" placeholder="Enter phone" />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" name="address" className="form-control" placeholder="Enter address" />
          </div>
          <div className="form-group form-button">
            <input type="submit" className="form-submit" value="Submit" />
          </div>
        </form>
        <a href='/'>Or go back to Contacts</a>
      </div>
    </div>
  );
}