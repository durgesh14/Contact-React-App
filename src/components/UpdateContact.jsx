import React, { useState } from "react";
import axios from "axios";

const UpdateContact = ({ contact, onUpdateContact }) => {
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedContact = {
      ...contact,
      name,
      email,
    };
    console.log("Updated Contact:- ", updatedContact);
    await axios.put(
      `https://jsonplaceholder.typicode.com/users/${contact.id}`,
      updatedContact
    );
    onUpdateContact(updatedContact);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Update Contact</button>
    </form>
  );
};
export default UpdateContact;
