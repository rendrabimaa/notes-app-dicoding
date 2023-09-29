import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./Layouts/Navbar";
import Notes from "./pages/Notes";
import ArchiveNotes from "./pages/ArchiveNotes"
import AppProvider from "../context/AppContext";

const App = () => {
    return (
        <Router>
            <div className="flex">             
            <Navbar />
            <AppProvider>
                <Routes>
                    <Route path="/" exact element={<Notes />} />
                    <Route path="/archive" element={<ArchiveNotes />} />
                </Routes>
            </AppProvider>
            </div> 
        </Router>
    )
}

export default App;