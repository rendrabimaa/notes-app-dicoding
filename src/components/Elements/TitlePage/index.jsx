import React from "react";

const TitlePage = ({children}) => {
    return (
        <h1 className="text-2xl font-bold text-slate-900">
            {children}
        </h1>
    )
}

export default TitlePage;