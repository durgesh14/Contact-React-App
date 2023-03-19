import React from "react";
import axios from "axios";

const DeleteContact = ({ contact, onDeleteContact }) => {
  const handleDelete = async () => {
    await axios.delete(
      `https://jsonplaceholder.typicode.com/users/${contact.id}`
    );
    onDeleteContact(contact);
    console.log("Deleted Contact: - ", contact);
  };
  return <button onClick={handleDelete}> </button>;
};

export default DeleteContact;
