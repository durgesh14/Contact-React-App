import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import deleteSvg from "../assets/delete.svg";

// This is a functional component that takes in a contact and a callback function for deleting a contact as props.
const DeleteContact = ({ contact, onDeleteContact }) => {
  // This asynchronous function sends a delete request to the API to delete the given contact,
  //calls the callback function to update the state in the parent component, and logs the deleted contact to the console.
  const handleDelete = async () => {
    await axios.delete(
      `https://jsonplaceholder.typicode.com/users/${contact.id}`
    );
    onDeleteContact(contact);
    console.log("Deleted Contact: - ", contact);
  };
  // This is the render method for the DeleteContact component. It returns a delete button
  return (
    <Button variant="danger" onClick={handleDelete}>
      <img src={deleteSvg} width={"20px"}></img>
    </Button>
  );
};

export default DeleteContact;
