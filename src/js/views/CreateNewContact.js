import React, { useState } from 'react';

const CreateNewContact = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

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
    props.onConfirm(data);
    console.log('Crear nuevo contacto:', { name, address, phone, email });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h1>Create a new contact</h1>
              <form>
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
                <div className="form-group mb-3">
                  <input type="email" id="email" className="form-control" value={email} onChange={handleCreateInputChange} />
                  <label htmlFor="email" className="form-label">Email</label>
                </div>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-success" onClick={handleConfirm}>Create</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CreateNewContact };