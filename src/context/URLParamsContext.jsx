import React, { createContext, useContext, useState } from 'react'

const UrlParamsContext = createContext()

const UrlParamsProvider = ({children}) => {
    const [urlParamsContext, setUrlParamsContext] = useState('');

    return (
        <UrlParamsContext.Provider value={{ urlParamsContext, setUrlParamsContext }}>
            { children }
        </UrlParamsContext.Provider>
    )
}

export const useUrlParamsContext = () => {
    return useContext(UrlParamsContext)
}

export default UrlParamsProvider
