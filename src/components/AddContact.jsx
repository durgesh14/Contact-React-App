import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="phone"
        placeholder="phone"
        value={phone}
        onChange={(e) => setphone(e.target.value)}
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default AddContact;
