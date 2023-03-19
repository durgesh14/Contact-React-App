import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import deleteSvg from "../assets/delete.svg";

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
      <img src={deleteSvg} width={"20px"}></img>
    </Button>
  );
};

export default DeleteContact;
