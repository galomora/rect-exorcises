import { createContext, useState, useEffect } from 'react';

export const SecurityContext = createContext (
    {username: "", permisions: []}
);

export const SecurityContextProvider = ( {children} ) {
    const [username, setUsername] = useState (null);
    const value = {username, setUsername};
    return <SecurityContext.Provider value={value}>{children}</SecurityContext.Provider>
}