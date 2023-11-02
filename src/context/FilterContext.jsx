import { createContext, useState } from "react";

export const FilterContext = createContext();

// eslint-disable-next-line react/prop-types
export const ChangeFilterContext = ({ children }) => {
    const [tag, setTag] = useState("commercial")
    return (
        <FilterContext.Provider value={{ tag, setTag }}>
            {children}
        </FilterContext.Provider>
    )

}