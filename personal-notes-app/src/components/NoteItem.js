import React, { useState, useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import { useParams, useNavigate } from "react-router-dom";

const NoteItem = () => {
  const { notes, editNote, deleteNote } = useContext(NotesContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const note = notes.find((note) => note.id === parseInt(id));

  // State for editing
  const [title, setTitle] = useState(note?.title || "");
  const [content, setContent] = useState(note?.content || "");
  const [isEditing, setIsEditing] = useState(false);

  if (!note) return <h2>Note not found</h2>;

  const handleEdit = () => {
    editNote(note.id, { title, content });
    setIsEditing(false);
  };

  return (
    <div style={{ padding: "1rem" }}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <button onClick={() => setIsEditing(true)}>Edit Note</button>
          <button
            onClick={() => {
              deleteNote(note.id);
              navigate("/");
            }}
          >
            Delete Note
          </button>
        </>
      )}
    </div>
  );
};

export default NoteItem;
