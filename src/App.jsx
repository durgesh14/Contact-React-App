import { useState } from "react";

import "./App.css";
import ContactList from "./components/ContactList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ContactList />
    </div>
  );
}

export default App;
