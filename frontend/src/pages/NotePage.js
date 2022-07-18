import React, { useState, useEffect } from "react";
import { ReactComponent as ArrowLeft } from "../assets/left.svg";
import { Link } from "react-router-dom";

const NotePage = ({ match, history }) => {
  let noteId = match.params.id;
  let [note, setNote] = useState(null);

  useEffect(() => {
    ambil_catatan();
  }, [noteId]);

  let ambil_catatan = async () => {
    let response = await fetch(`/api/catatan/${noteId}/`);
    let data = await response.json();
    setNote(data);
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

  let HandleSubmit = () => {
    /*
    fungsi untuk memaanggil fungsi update saat menekan tombol
    dan kembalikan laman awal
    */
    updateNote();
    history.push("/");
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={HandleSubmit} />
        </h3>
        <button onClick={deleteNote}>Hapus</button>
      </div>
      <textarea
        onChange={(e) => {
          setNote({ ...note, isi: e.target.value });
        }}
        defaultValue={note?.isi}
      ></textarea>
    </div>
  );
};

export default NotePage;
