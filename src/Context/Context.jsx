import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const apiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getApi = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setArticles(res.data);
      setLoading(false)
    };
    getApi();
  }, []);

  return <apiContext.Provider value={{articles, loading}}>{children}</apiContext.Provider>;
};
