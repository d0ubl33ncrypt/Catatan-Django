import React, { useState, useEffect } from "react";
import { ReactComponent as ArrowLeft } from "../assets/left.svg";

const NotePage = ({ match, history }) => {
  let noteId = match.params.id;
  let [note, setNote] = useState(null);

  useEffect(() => {
    ambil_catatan();
  }, [noteId]);

  let ambil_catatan = async () => {
    if (noteId === "baru") return;
    let response = await fetch(`/api/catatan/${noteId}/`);
    let data = await response.json();
    setNote(data);
  };

  let CreateNote = async () => {
    fetch(`/api/catatan/buat/`, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  let updateNote = async () => {
    /* 
    memanggil api,
    memanggil metode put
    serta memperbaharui isi
    */
    fetch(`/api/catatan/${noteId}/perbaharui/`, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  let deleteNote = async () => {
    fetch(`/api/catatan/${noteId}/hapus/`, {
      method: "DELETE",
      headers: {
        "content-Type": "application/json",
      },
    });
    history.push("/");
  };

  let handleSubmit = () => {
    /*
    
    */
    console.log("NOTE: ", note.isi);
    if (noteId !== "baru" && note.isi === "") {
      deleteNote();
    } else if (noteId !== "baru") {
      updateNote();
    } else if (noteId === "baru" && note.isi !== null) {
      CreateNote();
    }
    history.push("/");
  };

  let handleChange = (value) => {
    setNote(note => ({...note,isi: value }));
    console.log("Handle Change: ", note.isi);
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={handleSubmit} />
        </h3>

        {noteId !== "baru" ? (
          <button onClick={deleteNote}>Hapus</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )}
      </div>

      <textarea
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        value={note?.isi}
      ></textarea>
    </div>
  );
};

export default NotePage;

