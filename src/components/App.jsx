import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./Layouts/Navbar";
import Notes from "./pages/Notes";
import ArchiveNotes from "./pages/ArchiveNotes"
import AppProvider from "../context/AppContext";
import SearchProvider from "../context/SearchContext";
import UrlParamsProvider from "../context/URLParamsContext";

const App = () => {
    return (
        <Router>
            <UrlParamsProvider>
                <div className="flex flex-col w-full md:w-2/3"> 
                <SearchProvider>
                    <Navbar />
                    <AppProvider>
                            <Routes>
                                <Route path="" exact element={<Notes />} />
                                <Route path="archive" element={<ArchiveNotes />} />
                            </Routes>
                    </AppProvider>
                </SearchProvider>
                </div> 
            </UrlParamsProvider>
        </Router>
    )
}

export default App;