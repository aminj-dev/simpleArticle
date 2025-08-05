import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const apiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setArticles(res.data);
    };
    getApi();
  }, []);

  return <apiContext.Provider value={{articles}}>{children}</apiContext.Provider>;
};
