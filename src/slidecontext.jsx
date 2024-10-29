import React, { createContext, useState } from "react";

const SlideContext = createContext();

export const SlideProvider = ({ children }) => {
    const [curslide, setslide] = useState([]);

    const add = (slide) => {
        setslide(prevValue => {
            //console.log(prevValue.includes(slide));
            if(prevValue.includes(slide))
                return [...prevValue];
            else 
                return [...prevValue, slide];
        });
    };

    const remove = (slide) => {
        setslide(prev => {
            return prev.filter(val => val !== slide);
        });
    };

    return (
        <SlideContext.Provider value={{ curslide, add, remove }}>
            {children}
        </SlideContext.Provider>
    );
};

export default SlideContext;