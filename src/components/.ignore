import React, { useState } from "react";
import axios from "axios";
import { Col, Form, Row, Button, Container } from "react-bootstrap";

const UpdateContact = ({ contact, onUpdateContact }) => {
  const [name, setName] = useState(contact.name);
  const [phone, setphone] = useState(contact.phone);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedContact = {
      ...contact,
      name,
      phone,
    };
    console.log("Updated Contact:- ", updatedContact);
    try {
      await axios.put(
        `https://jsonplaceholder.typicode.com/users/${contact.id}`,
        updatedContact
      );
      onUpdateContact(updatedContact);
    } catch (err) {
      setError(
        "An error occurred while updating the contact. Please try again."
      );
    }
    onUpdateContact(updatedContact);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <Form.Control
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Form.Control
        type="phone"
        value={phone}
        onChange={(e) => setphone(e.target.value)}
      />
      <button type="submit">Update Contact</button>
    </Form>
  );
};
export default UpdateContact;
