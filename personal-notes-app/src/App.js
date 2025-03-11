// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotesProvider from "./context/NotesContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddNote from "./components/AddNote";
import NoteItem from "./components/NoteItem";

const App = () => {
  return (
    <NotesProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-note" element={<AddNote />} />
          <Route path="/note/:id" element={<NoteItem />} />
        </Routes>
      </Router>
    </NotesProvider>
  );
};

export default App;
