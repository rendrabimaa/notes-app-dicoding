import React from 'react'
import DarkModeContextProvider from './DarkModeContext'
import AuthContextProvider from './AuthContext'
import UrlParamsProvider from './URLParamsContext'
import SearchProvider from './SearchContext'

const GlobalStateProvider = ({ children }) => {
  return (
    <>
    <DarkModeContextProvider>
        <AuthContextProvider>
            <UrlParamsProvider>
                <SearchProvider>
                            {children}
                </SearchProvider>
            </UrlParamsProvider>
        </AuthContextProvider>
    </DarkModeContextProvider>
    </>
  )
}

export default GlobalStateProvider