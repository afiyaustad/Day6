// src/context/NotesContext.js
import React, { createContext, useState, useEffect } from "react";

export const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  // Load notes from LocalStorage when the app starts
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  // Save notes to LocalStorage whenever the notes state changes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Add a new note
  const addNote = (title, content) => {
    const newNote = {
      id: Date.now(),
      title,
      content,
    };
    setNotes([...notes, newNote]);
  };

  // Delete a note
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // Edit a note
  const editNote = (id, updatedNote) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, ...updatedNote } : note
      )
    );
  };
  
  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
