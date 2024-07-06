import React, { useState, useContext, useEffect } from 'react';
import {Context} from "../store/appContext.js";
import { Link } from "react-router-dom";

const CreateNewContact = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const {actions, contacts} = useContext(Context)

  useEffect(() => {
    // Re-render the component when the contacts state changes
    console.log('Contacts updated:', contacts);
  }, [contacts]);

  const handleCreateInputChange = (event) => {
    const { id, value } = event.target;
    switch (id) {
      case 'name':
        setName(value);
        break;
      case 'address':
        setAddress(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const handleConfirm = () => {
    const data = { name, address, phone, email };
    actions.postContact(data)
    console.log(data)
    // props.onConfirm(data);
    console.log('Crear nuevo contacto:', { name, address, phone, email });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body bg-color rounded">
              <div className="h1createNewContactStyle">
              <h1>Create a new contact</h1>
              </div>
              <form className="form-bg rounded">
                <div className="form-group mb-3">
                  <input type="text" id="name" className="form-control" value={name} onChange={handleCreateInputChange} />
                  <label htmlFor="name" className="form-label">Full Name</label>
                </div>
                <div className="form-group mb-3">
                  <input type="text" id="address" className="form-control" value={address} onChange={handleCreateInputChange} />
                  <label htmlFor="address" className="form-label">Address</label>
                </div>
                <div className="form-group mb-3">
                  <input type="tel" id="phone" className="form-control" value={phone} onChange={handleCreateInputChange} />
                  <label htmlFor="phone" className="form-label">Phone</label>
                </div>
                <div className="form-group">
                  <input type="email" id="email" className="form-control" value={email} onChange={handleCreateInputChange} />
                  <label htmlFor="email" className="form-label">Email</label>
                </div>
                <Link to="/">
                <div className="buttonNewContactStyle  pt-10">
                <button type="button" className="btn btn-secondary mx-2">Cancel</button>
                <button type="button" className="btn btn-success float-end " onClick={handleConfirm}>Create</button>
                </div>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CreateNewContact };