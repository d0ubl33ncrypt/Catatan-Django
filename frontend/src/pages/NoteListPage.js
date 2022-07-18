import React, { useState, useEffect } from "react";
import AddButton from "../compoents/AddButton";
import ListItem from "../compoents/ListItem";

const NoteListPage = () => {
  let [notes, setNotes] = useState([]);
  useEffect(() => {
    ambilCatatan();
  }, []);

  let ambilCatatan = async () => {
    let response = await fetch("/api/catatan/");
    let data = await response.json();
    console.log("DATA: ", data);
    setNotes(data);
  };

  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782; Catatan</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      <div className="notes-list">
        {notes.map((note, index) => (
          <ListItem key={index} note={note} />
        ))}
      </div>
      <AddButton />
    </div>
  );
};

export default NoteListPage;
