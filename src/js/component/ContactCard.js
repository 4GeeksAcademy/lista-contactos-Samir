import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types"
import { Context } from "../store/appContext.js";



export const ContactCard = props => {
	const { store, actions } = useContext(Context)
	const [state, setState] = useState({
		//initialize state here
	});

	useEffect(() => {
		initializeContactList();
	  }, []);
	
	  async function initializeContactList() {
		try {
		  const fetchedContacts = await getContacts();
		  if (fetchedContacts.length === 0) {
			// Si no hay contactos encontrados, crear una nueva lista de contactos
			await createContactList();
			// Volver a intentar obtener los contactos después de crear la lista
			const updatedContacts = await getContacts();
			setContacts(updatedContacts);
		  } else {
			setContacts(fetchedContacts);
		  }
		} catch (error) {
		  console.error("Error initializing contact list:", error);
		  setContacts([]);
		}
	  }
	
	  async function createContactList() {
		try {
		  const response = await fetch(`https://playground.4geeks.com/contact/agendas/Samir_Mondabla`, {
			method: "POST",
			headers: {
			  accept: "application/json",
			  "Content-Type": "application/json",
			},
			body: JSON.stringify([]), // Enviar un array vacío para crear la lista inicial
		  });
		  if (!response.ok) {
			throw new Error(`Error creating contact list: ${response.statusText}`);
		  }
		  // Opcional: Puedes retornar algún indicador o mensaje de éxito si es necesario
		} catch (error) {
		  console.error("Error creating contact list:", error);
		  throw error; // Manejo de errores según tus necesidades
		}
	  }
	
	
	return (
		<div className="d-flex justify-content-center aling-items-center">
		<li className="list-group-item container m-1 border-1 rounded">
			<div className="row">
				<div className="col-12 col-sm-6 col-md-3 mx-auto">
					<img src="https://www.hvcruzcubierta.com/wp-content/uploads/2015/01/loro-1110x624.jpg" alt="Mike Anamendolla" 
					className="rounded-circle mx-auto d-block img-fluid"
					 style={{
   					 objectFit: 'cover',borderRadius: '50%',width: '200px',  height: '200px'}}/>
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className=" float-right">
						<button className="btn" data-bs-toggle="modal" data-bs-target="#addModal" onClick={() => props.onUpdate()}>
							<i className="fas fa-pencil-alt mr-3" />
						</button>
						<button className="btn" data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => props.onDelete()} >
							<i className="fas fa-trash-alt" />
						</button>
					</div>
					<label className="name lead">{props.Name}</label>
					<br />
					<i className="fas fa-map-marker-alt text-muted mr-3" />
					<span className="text-muted">{props.address}</span>
					<br />
					<span
						className="fa fa-phone fa-fw text-muted mr-3"
						data-toggle="tooltip"
						title=""
						data-original-title="(870) 288-4149"
					/>
					<span className="text-muted small">{props.phone}</span>
					<br />
					<span
						className="fa fa-envelope fa-fw text-muted mr-3"
						data-toggle="tooltip"
						data-original-title=""
						title=""
					/>
					<span className="text-muted small text-truncate">{props.email}</span>
				</div>
			</div>
			
		</li>
		</div>
	);
};
/**
* Define the data-types for
0o	'* your component's properties
**/
ContactCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	onUpdate: PropTypes.func,
	Name: PropTypes.string,
	email: PropTypes.string,
	phone: PropTypes.string,
	address: PropTypes.string,
	id: PropTypes.number
};
/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	onDelete: null
};

