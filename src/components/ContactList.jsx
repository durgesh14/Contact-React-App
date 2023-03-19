// src/components/ContactList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import AddContact from "./AddContact";
import UpdateContact from "./UpdateContact";
import DeleteContact from "./DeleteContact";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [editingContactId, setEditingContactId] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setContacts(data);
      setNextId(Math.max(...data.map((contact) => contact.id)) + 1);
    };
    fetchContacts();
  }, []);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const handleUpdateContact = (updatedContact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
    setEditingContactId(null);
  };

  const handleDeleteContact = (deletedContact) => {
    setContacts(contacts.filter((contact) => contact.id !== deletedContact.id));
  };

  return (
    <div>
      <h1>Contact List</h1>
      <AddContact onAddContact={handleAddContact} />
      {contacts.map((contact) => (
        <div key={contact.id}>
          {editingContactId === contact.id ? (
            <UpdateContact
              contact={contact}
              onUpdateContact={handleUpdateContact}
            />
          ) : (
            <>
              <span>{contact.name}</span>
              <button onClick={() => setEditingContactId(contact.id)}>
                Edit
              </button>
              <DeleteContact
                contact={contact}
                onDeleteContact={handleDeleteContact}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactList;
