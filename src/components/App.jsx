import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./Layouts/Navbar";
import Notes from "./pages/Notes";
import ArchiveNotes from "./pages/ArchiveNotes"
import AppProvider from "../context/AppContext";
import SearchProvider from "../context/SearchContext";
import UrlParamsProvider from "../context/URLParamsContext";
import ReactModal from "react-modal";
import Modal from "./Elements/Modal";

ReactModal.setAppElement('#root');

const App = () => {

    const [ modalIsOpen, setModalIsOpen ] = useState(false)
    const openAddModal = () => {
        setModalIsOpen(true)
    }

    useEffect(() => {
        console.log(modalIsOpen)
    }, [modalIsOpen])

    const closeModal = () => {
        setModalIsOpen(false)
    }

    

    return (
        <Router>
            <UrlParamsProvider>
                <Routes>
                    <Route path="/note/1" element={ <h1>Hello</h1> } />
                        
                </Routes>
                <div className="flex flex-col w-full md:w-2/3 mx-auto"> 
                <SearchProvider>
                    <Navbar openAddModal={openAddModal} />
                    <AppProvider>
                            <Modal modalIsOpen={modalIsOpen} closeModal={closeModal} />
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