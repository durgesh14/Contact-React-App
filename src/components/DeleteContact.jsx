import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

const DeleteContact = ({ contact, onDeleteContact }) => {
  const handleDelete = async () => {
    await axios.delete(
      `https://jsonplaceholder.typicode.com/users/${contact.id}`
    );
    onDeleteContact(contact);
    console.log("Deleted Contact: - ", contact);
  };
  return (
    <Button variant="danger" onClick={handleDelete}>
      Delete{" "}
    </Button>
  );
};

export default DeleteContact;
