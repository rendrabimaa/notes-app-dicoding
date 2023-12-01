import React from 'react'
import DarkModeContextProvider from './DarkModeContext'
import AuthContextProvider from './AuthContext'
import UrlParamsProvider from './URLParamsContext'
import SearchProvider from './SearchContext'
import AppProvider from './AppContext'

const GlobalStateProvider = ({ children }) => {
  return (
    <>
    <DarkModeContextProvider>
        <AuthContextProvider>
            <UrlParamsProvider>
                <SearchProvider>
                    <AppProvider>
                        {children}
                    </AppProvider>
                </SearchProvider>
            </UrlParamsProvider>
        </AuthContextProvider>
    </DarkModeContextProvider>
    </>
  )
}

export default GlobalStateProvider