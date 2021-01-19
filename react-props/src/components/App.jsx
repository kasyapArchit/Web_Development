import React from "react";
import contacts from "../contacts.js";
import Card from "./Card"


function App() {
  let rows = [];
  for(let i=0; i<contacts.length; i++) {
    rows.push(
      <Card 
        name={contacts[i].name}
        img={contacts[i].imgURL}
        tel={contacts[i].phone}
        email={contacts[i].email}
        key={i}
      />
    );
  }

  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {rows}
    </div>
  );
}

export default App;
