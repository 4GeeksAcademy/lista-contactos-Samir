import { json } from "react-router";


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList:[]
		},
		actions: {
			getContacts: () => {
				fetch("https://playground.4geeks.com/contact/agendas/samir_mondabla")
				.then(Response => Response.json())
				.then(data => setStore({contactList:data.contacts}))
				.catch(error => console.log("hubo un problema", error))
			},

			deleteContact: (id) => {
				return fetch("https://playground.4geeks.com/contact/agendas/samir_mondabla/contacts/"+id, {method:"Delete"})
				//  .then(Response => Response.json())
				//  .then(data => setStore({contactList:data.contacts}))
			},

			putContact: (id, data) => {
				return fetch(`https://playground.4geeks.com/contact/agendas/samir_mondabla/contacts/${id}`,  {
					method: "PUT",
					headers: {
					  'Accept': 'application/json',
					  'Content-Type': 'application/json'
					},
					body: JSON.stringify(data)
				  })
				  .then(Response => Response.json())
				}
			}
	};
};



export default getState;
