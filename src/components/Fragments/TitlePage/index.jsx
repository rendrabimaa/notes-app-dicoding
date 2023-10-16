import React from "react";
import AddNoteButton from "../AddNoteButton";

const TitlePage = ({title}) => {
    return (
        <>
            <h1 className="text-2xl font-bold text-slate-900">
                {title}
            </h1>
            {/* <AddNoteButton openAddModal={openAddModal}/> */}
            
        </>
    )
}

export default TitlePage;