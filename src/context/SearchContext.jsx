import React, { createContext, useContext, useState } from 'react'

const SearchContext = createContext()

 const SearchProvider = ({ children }) => {
    const [searchContext, setSearchContext] = useState('')

    return (
        <SearchContext.Provider value={{ searchContext, setSearchContext }}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearchContext = () => {
    return useContext(SearchContext)
}

export default SearchProvider
