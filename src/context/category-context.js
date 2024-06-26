import { createContext, useContext, useState } from "react";

const initialValue = "";

const CategoryContext = createContext(initialValue);

const CategoryProvider = ({ children }) => {
  const [hotelCategory, sethotelCategory] = useState(initialValue);

  return (
    <CategoryContext.Provider value={{ hotelCategory, sethotelCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);

export { useCategory, CategoryProvider };
