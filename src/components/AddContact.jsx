import React, { useEffect, useState } from "react";
import axios from "axios";

const AddContact = ({ onAddContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newContact = {
      name,
      email,
    };
    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newContact
    );
    onAddContact(data);
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default AddContact;
