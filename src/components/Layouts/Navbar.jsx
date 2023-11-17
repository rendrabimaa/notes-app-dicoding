import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddNoteButton from "../Fragments/AddNoteButton";
import SearchBar from "../Fragments/SearchBar";
import { useUrlParamsContext } from "../../context/URLParamsContext";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import Input from "../Elements/Input";


const Navbar = ({openAddModal}) => {

    const { urlParamsContext } = useUrlParamsContext()
    
    const isArchivePage = urlParamsContext === "/archive" ? true : false;

    return (
        <>
            <div className="w-full md:w-4/6 px-2 mx-auto fixed pb-6 bg-white">
                <div className="w-full mb-6">
                    <p className="text-3xl font-bold my-4 md:my-8">Notes App</p>
                    <div className="flex flex-col md:flex-row w-full gap-2">
                        <AddNoteButton openAddModal={openAddModal} />
                        <SearchBar />
                    </div>
                </div>
                    
                <ul className="flex justify-center gap-6 md:mt-12">
                    <li>
                        <Link to="/" className={`font-semibold text-xl ${!isArchivePage ? 'underline underline-offset-8 decoration-slate-700 decoration-4' : ''}`}>Notes</Link>
                    </li>
                    <li>
                        <Link to="/archive" className={`font-semibold text-xl ${isArchivePage ? 'underline underline-offset-8 decoration-slate-700 decoration-4' : ''}`}>Archive Notes</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

Navbar.propTypes = {
    openAddModal: PropTypes.func.isRequired
}

export default Navbar