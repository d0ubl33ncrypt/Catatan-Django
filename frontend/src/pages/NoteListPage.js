import React, { useState, useEffect } from "react";
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
    <div>
      <div className="notes-list">
        {notes.map((note, index) => (
          <ListItem key={index} note={note} />
        ))}
      </div>
    </div>
  );
};

export default NoteListPage;
