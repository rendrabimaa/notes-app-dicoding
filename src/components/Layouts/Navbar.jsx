import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import AddNoteButton from "../Fragments/AddNoteButton";
import SearchBar from "../Fragments/SearchBar";
import { useUrlParamsContext } from "../../context/URLParamsContext";
import { useSearchContext } from "../../context/SearchContext";


const Navbar = () => {
    const { urlParamsContext } = useUrlParamsContext()
    
    const isArchivePage = urlParamsContext === "/archive" ? true : false;

    return (
        <div className="w-full md:w-4/6 px-2 md:px-6 mx-auto">
            <div className="w-full mb-6">
                <p className="text-3xl font-bold my-4 md:my-12">Notes App</p>
                <div className="flex flex-col w-full gap-2">
                    <AddNoteButton />
                    <SearchBar />
                </div>
                
            </div>
                
            <ul className="flex justify-center gap-6">
                <li>
                    <Link to="/" className={`font-semibold text-xl ${!isArchivePage ? 'underline underline-offset-8 decoration-slate-700 decoration-4' : ''}`}>Notes</Link>
                </li>
                <li>
                    <Link to="/archive" className={`font-semibold text-xl ${isArchivePage ? 'underline underline-offset-8 decoration-slate-700 decoration-4' : ''}`}>Archive Notes</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar