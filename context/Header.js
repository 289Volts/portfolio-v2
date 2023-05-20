import React, { createContext, useContext, useState } from "react";

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const values = {
        isMenuOpen,
        setIsMenuOpen
    }
	return <HeaderContext.Provider value={values}>{children}</HeaderContext.Provider>;
};

export const useHeader = () => {
	return useContext(HeaderContext);
};
