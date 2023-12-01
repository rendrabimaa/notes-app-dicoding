import React from "react";

const TitlePage = ({title}) => {
    return (
        <>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                {title}
            </h1>
            
        </>
    )
}

export default TitlePage;