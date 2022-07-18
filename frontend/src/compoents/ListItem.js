import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ note }) => {
  /*
  fungsi ini buat bikin link tertentu yang isinya 
  untuk ngeroute ke link satuan
  */
  return (
    <Link to={`/catatan/${note.id}`}>
      <div className="notes-list-item">
        <h3>{note.isi}</h3>
      </div>
    </Link>
  );
};

export default ListItem;
