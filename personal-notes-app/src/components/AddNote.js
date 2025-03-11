// src/components/AddNote.js
import React, { useState, useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import { useNavigate } from "react-router-dom";

const AddNote = () => {
  const { addNote } = useContext(NotesContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      addNote(title, content);
      navigate("/");
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Add New Note</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default AddNote;
