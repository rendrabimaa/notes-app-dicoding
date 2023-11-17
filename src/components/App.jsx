import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Notes from "./pages/Notes";
import ArchiveNotes from "./pages/ArchiveNotes"
import AppProvider from "../context/AppContext";
import SearchProvider from "../context/SearchContext";
import UrlParamsProvider from "../context/URLParamsContext";
import ReactModal from "react-modal";
import MainLayout from "./Layouts/MainLayout";
import DetailNote from "./pages/DetailNote";
import NotFound from "./pages/404";

ReactModal.setAppElement('#root');

const App = () => {  

    return (
        <Router>
            <UrlParamsProvider>
                <SearchProvider>
                    <AppProvider>
                            <Routes>
                                <Route path="/" element={<MainLayout />}>
                                    <Route index path="" exact element={<Notes />} />
                                    <Route path="archive" element={<ArchiveNotes />} />
                                </Route>
                                <Route path="/note/:id" element={<DetailNote />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                    </AppProvider>
                </SearchProvider>
            </UrlParamsProvider>
        </Router>
    )
}

export default App;