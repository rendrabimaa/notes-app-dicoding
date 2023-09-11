import React from "react";
import Navbar from "./Layouts/Navbar";

const App = () => {
    return (
        <div className="flex">  
            <Navbar />
            <h1 className="text-red-500">Hello World</h1>
        </div>
    )
}

export default App;