import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Form, Row, Button, Container } from "react-bootstrap";

const AddContact = ({ onAddContact }) => {
  const [name, setName] = useState("");
  const [phone, setphone] = useState("");

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
                />
              </Col>
              <Col>
                <Form.Control
                  type="phone"
                  placeholder="phone"
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
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
