import React, { useEffect, useContext, useState } from "react";
import "../../styles/home.css";
import { ContactCard } from "../component/ContactCard.js";
import {Context} from "../store/appContext.js";
import DeleteModal from "../component/DeleteModal";
import AddModal from "../component/AddModal";


export const Home = () => {
	const [selectedCard, setSelectedCard] = useState(null)

	const {store, actions} = useContext(Context)
	useEffect(() => {
		actions.getContacts()
		console.log(store.contactList)
	}, []) 


	const onDelete = (item) => {
		setSelectedCard(item)
		console.log("borrar", item)
	};

	const onUpdate = (item) => {
		setSelectedCard(item)
		console.log("editar")
	};


	const confirmDelete = () => {
		console.log("onConfirm", selectedCard);
		actions.deleteContact(selectedCard.id)
		.then(res => {
			console.log(res);
			actions.getContacts();
		})
		.catch(error => console.log("hubo un problema", error)) ;
	}

	const confirmEdit = (data) => {
		console.log("onConfirm", selectedCard);
		console.log("data:", data);
		const editedData = { name: data.name, address: data.address, phone: data.phone, email: data.email };
		actions.putContact(selectedCard.id, editedData)
		.then(res => {
			console.log(res);
			actions.getContacts();
		})
		.catch(error => console.log("hubo un problema", error)) ;
	}

	return (
	<div className="cardExist">
		{store.contactList.map((item,index) => {
			return (
				<ContactCard Name={item.name} email={item.email} phone={item.phone} address={item.address}
				key={index} onDelete ={() => onDelete(item)} onUpdate={() => onUpdate(item)} id={item.id}/>
				
			)
		})}
			<DeleteModal  data={selectedCard} onConfirm={() => { confirmDelete()}} />
			<AddModal data={selectedCard} onConfirm={(data) => { confirmEdit(data)}}/>
	</div>
	)
};


