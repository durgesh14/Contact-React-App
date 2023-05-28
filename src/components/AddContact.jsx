import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Form, Row, Button, Container } from "react-bootstrap";

// This is a functional component that takes a callback function for adding a contact as a prop.
const AddContact = ({ onAddContact }) => {
  const [name, setName] = useState("");
  const [phone, setphone] = useState("");
  // This asynchronous function handles form submissions. It creates a new contact object, sends a post request to the API to add the new contact,
  //calls the callback function to update the state in the parent component, and then clears the form fields.
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newContact = {
      name,
      phone,
    };
    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newContact
    );
    onAddContact(data);
    setName("");
    setphone("");
  };

  // This is the render method for the AddContact component. It returns a form for adding a new contact.
  return (
    <Container>
      <Row className="justify-content-md-center mb-4">
        <Col xs={12} md={10}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={true}
                />
              </Col>
              <Col>
                <Form.Control
                  type="phone"
                  placeholder="phone"
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                  required={true}
                />
              </Col>

              <Col>
                <Container className="d-flex justify-content-end">
                  <Button variant="dark" type="submit">
                    Add Contact
                  </Button>
                </Container>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddContact;
