import React, { createContext, useContext, useReducer } from "react";
import { getInitialData } from "../utils";

const AppContext = createContext(null)

const AppDispatch = createContext(null)

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_NOTES':
            return [...state, action.payload];
            break;

        case 'EDIT_NOTE': {
            const editedNote = state.map((note) => {
                        if(note.id === action.payload.id) {
                            return {
                                ...note, 
                                title: action.payload.title,
                                body: action.payload.body,
                                archived: action.payload.archived
                            }
                        }
                        return note;
                    })

            return editedNote;
        }
        case 'ARCHIVE_NOTES': {
            const updatedNotes = state.map((note) => {
                if(note.id === action.payload.noteId) {
                    return { ...note, archived: !note.archived}
                }
                return note;
            })
            return updatedNotes
        }
        break;

        case 'DELETE_NOTES': {
            const updatedNotes = state.filter((note) => note.id !== action.payload.noteId)
            return updatedNotes
        }
        break;
    

        // case 'DELETE_NOTE':
        //     const updatedNotes = 
        default: {
            throw Error("Unknown action : ", action.type)
        }
    }
}

const AppProvider = ({ children }) => {
    const initialData = getInitialData()
    const [notes, dispatch] = useReducer(reducer, initialData);

    return (
        <AppContext.Provider value={ notes }>
            <AppDispatch.Provider value={ dispatch }>
                { children }
            </AppDispatch.Provider>
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}

export const useAppDispatch = () => {
    return useContext(AppDispatch)
}

export default AppProvider