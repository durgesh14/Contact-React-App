// src/components/ContactList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import AddContact from "./AddContact";
import UpdateContact from "./UpdateContact";
import DeleteContact from "./DeleteContact";
import { Table, Button, Container, Row, Col, Form } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import "../App.css";
import editSvg from "../assets/edit.svg";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [editingContactId, setEditingContactId] = useState(null);
  const [editedContact, setEditedContact] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setContacts(data);
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

  const startEditing = (contact) => {
    setEditedContact(contact);
    setEditingContactId(contact.id);
  };

  const saveEditedContact = () => {
    handleUpdateContact(editedContact);
    setEditedContact(null);
    setEditingContactId(null);
  };

  return (
    <div>
      <h1 className="custom-table">Contact List</h1>
      <AddContact onAddContact={handleAddContact} />
      <Container>
        <Row>
          <Col xs={12} md={8} lg={12}>
            <Table striped borderless hover variant="dark">
              <thead className="text-center">
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact.id}>
                    <td>
                      {editingContactId === contact.id ? (
                        <Form.Control
                          type="text"
                          value={editedContact.name}
                          onChange={(e) =>
                            setEditedContact({
                              ...editedContact,
                              name: e.target.value,
                            })
                          }
                        />
                      ) : (
                        contact.name
                      )}
                    </td>
                    <td>
                      {editingContactId === contact.id ? (
                        <Form.Control
                          type="text"
                          value={editedContact.phone}
                          onChange={(e) =>
                            setEditedContact({
                              ...editedContact,
                              phone: e.target.value,
                            })
                          }
                        />
                      ) : (
                        contact.phone
                      )}
                    </td>
                    <td>
                      {editingContactId === contact.id ? (
                        <Container className="d-flex justify-content-center">
                          <Button variant="success" onClick={saveEditedContact}>
                            Save
                          </Button>
                        </Container>
                      ) : (
                        <Stack
                          direction="horizontal"
                          gap={2}
                          className="d-flex justify-content-center"
                        >
                          <Button
                            variant="primary"
                            onClick={() => startEditing(contact)}
                          >
                            <img src={editSvg} width={"20px"}></img>
                          </Button>
                          <DeleteContact
                            contact={contact}
                            onDeleteContact={handleDeleteContact}
                          />
                        </Stack>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactList;
