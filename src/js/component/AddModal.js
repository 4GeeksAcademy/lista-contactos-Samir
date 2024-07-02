import React, { useState } from 'react';

const addModal = (props) => {
  const [name, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleInputChange = (event) => {
    switch (event.target.id) {
      case 'name':
        setFullName(event.target.value);
        break;
      case 'address':
        setAddress(event.target.value);
        break;
      case 'phone':
        setPhone(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleConfirm = () => {
    const data = { name, address, phone, email };
    props.onConfirm(data);
  };

  return (
    <div className="modal fade" id="addModal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1>Create a new contact</h1>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Enter full name" className="form-control" value={name} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" id="address" placeholder="Enter address" className="form-control" value={address} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" placeholder="Enter phone" className="form-control" value={phone} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter email" className="form-control" value={email} onChange={handleInputChange} />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button> 
            <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={handleConfirm}>Create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default addModal;