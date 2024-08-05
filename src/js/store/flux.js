import { json } from "react-router";


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList: [],
      		apiUrl: "https://playground.4geeks.com/contact/agendas",
      		user: "samir_mondabla",
		},
		actions: {

			
			createContactList: async () => {
        const store = getStore();
        try {
          const response = await fetch(`${store.apiUrl}/${store.user}`, {
            method: "POST",
          });
          const data = await response.json();
          if (response.ok) {
            return true;
          }
          return false;
        } catch (error) {
          console.error("Error", error);
          return false;
        }
      },

			getContacts: () => {
				fetch("https://playground.4geeks.com/contact/agendas/samir_mondabla")
				.then(Response => Response.json())
				.then(data => setStore({contactList:data.contacts}))
				.catch(error => console.log("hubo un problema", error))
			},

			postContact: (data) => {
				return fetch(`https://playground.4geeks.com/contact/agendas/samir_mondabla/contacts/`,  {
					method: "POST",
					headers: {
					  'Accept': 'application/json',
					  'Content-Type': 'application/json'
					},
					body: JSON.stringify(data)
				  })
				  .then(Response => Response.json())
				  .then(newContact => {
					// Update the contactList state with the new contact
					setStore({ contactList: [...getStore().contactList, newContact] });
				  });
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
