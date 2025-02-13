import { useEffect, useState, createContext } from "react"
import { getPage } from "./helper";
export const Data = createContext(null);

export default function App() {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(location.hash.substring(1) || "/");

  useEffect(() => {
    fetch("/data/data.json").then(r => r.json()).then((json) => setData(json));
    window.addEventListener("hashchange", () => setUrl(location.hash.substring(1) || "/"));
  }, []);

  const page = getPage(url);
  return (
    <>
      <Data.Provider value={{ data, setData }}>
        {page.component}
      </Data.Provider>
    </>
  )
}

