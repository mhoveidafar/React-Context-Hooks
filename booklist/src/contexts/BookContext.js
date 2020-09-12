import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/bookReducer';

// invoke createContext function
export const BookContext = createContext();

const BookContextProvider = (props) => {
    // invoke useState() hook
    const [books, dispatch] = useReducer(bookReducer, [
        { title: 'a tale of two cities', author: 'charles dickens', id: 1 },
        { title: 'one hundred years of solitude', author: 'gabriel garcia marquez', id: 2 }
    ]
        // To save data in local storage:
        /*
        , () => {
            const localData = localStorage.getItem('books');
            return localData ? JSON.parse(localData) : [];
        });
        useEffect(() => {
            localStorage.setItem('books', JSON.stringify(books))
        }, [books]
        */
    );
    return (
        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;