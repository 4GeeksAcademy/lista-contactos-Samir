import React from 'react';

const deleteModal = (props) => {
  return (
    <div className="modal fade" id="deleteModal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Delete contact: {props?.data?.name}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete this contact?</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => props.onConfirm()}>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default deleteModal;