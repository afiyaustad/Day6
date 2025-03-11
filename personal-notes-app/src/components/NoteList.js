// src/components/NoteList.js
import React, { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import { Link } from "react-router-dom";

const NoteList = () => {
  const { notes } = useContext(NotesContext);

  return (
    <div style={{ padding: "1rem" }}>
      <table border="1" width="100%" style={{ textAlign: "left" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {notes.length === 0 ? (
            <tr>
              <td colSpan="2">No notes available</td>
            </tr>
          ) : (
            notes.map((note) => (
              <tr key={note.id}>
                <td>{note.title}</td>
                <td>
                  <Link to={`/note/${note.id}`}>View</Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default NoteList;
